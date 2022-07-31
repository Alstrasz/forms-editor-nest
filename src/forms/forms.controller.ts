import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import * as _ from 'lodash';
import { CreateFormDtoJsonRpc } from './dto/create_form.dto';
import { FormDto, FormDtoJsonRpc } from './dto/form.dto';
import { FormDescriptionShortDto, FormShortListDtoJsonRpc } from './dto/forms_short_list_dto';
import { FormsService } from './forms.service';

@Controller( 'forms' )
export class FormsController {
    constructor ( private forms_service: FormsService ) {}

    @Get( '/:id' )
    get_form_by_id ( @Param( 'id', new ParseIntPipe() ) id: number, @Query( 'jid', new ParseIntPipe() ) jid: number ): Promise<FormDtoJsonRpc> {
        return this.forms_service.find_form_by_id( id ).then( ( val ) => {
            if ( val === null ) {
                throw new NotFoundException( { descriptions: 'No form with such id was found' } );
            }
            return new FormDtoJsonRpc( new FormDto( val ), jid );
        } );
    }

    @Post( '' )
    create_form ( @Body() create_from_dto_json_rpc: CreateFormDtoJsonRpc ): Promise<FormDtoJsonRpc> {
        return this.forms_service.create_form( create_from_dto_json_rpc.params ).then( ( val ) => {
            return new FormDtoJsonRpc( new FormDto( val ), create_from_dto_json_rpc.id );
        } );
    }

    @Get( '' )
    get_froms_short ( @Query( 'jid', new ParseIntPipe() ) jid: number ): Promise<FormShortListDtoJsonRpc> {
        return this.forms_service.get_all_froms_short().then( ( val ) => {
            return new FormShortListDtoJsonRpc( _.map( val, ( elem ) => {
                return new FormDescriptionShortDto( elem );
            } ), jid );
        } );
    }
}
