import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import * as _ from 'lodash';
import { CreateFormResponseDtoJsonRpc } from './dto/create_form_response.dto';
import { FormResponseDto, FormResponseDtoJsonRpc, FormResponsesDtoJsonRpc } from './dto/form_response.dto';
import { ResponsesService } from './responses.service';

@Controller( 'responses' )
export class ResponsesController {
    constructor ( private responses_service: ResponsesService ) {}

    @Get( '/:id' )
    get_responses_by_id ( @Param( 'id', new ParseIntPipe() ) id: number, @Query( 'jid', new ParseIntPipe() ) jid: number ): Promise<FormResponsesDtoJsonRpc> {
        return this.responses_service.get_all_responses_for_form( id ).then( ( val ) => {
            return new FormResponsesDtoJsonRpc( _.map( val, ( elem ) => {
                return new FormResponseDto( elem );
            } ), jid );
        } );
    }

    @Post( '' )
    create_response ( @Body() create_from_response_dto_json_rpc: CreateFormResponseDtoJsonRpc ): Promise<FormResponseDtoJsonRpc> {
        return this.responses_service.create_form_response( create_from_response_dto_json_rpc.params ).then( ( val ) => {
            return new FormResponseDtoJsonRpc( new FormResponseDto( val ), create_from_response_dto_json_rpc.id );
        } );
    }
}
