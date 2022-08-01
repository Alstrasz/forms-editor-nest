import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import { FormsService } from 'src/forms/forms.service';
import { Repository } from 'typeorm';
import { CreateFormResponseDto } from './dto/create_form_response.dto';
import { FormResponse } from './entites/form_responce.entity';

@Injectable()
export class ResponsesService {
    constructor (
        @InjectRepository( FormResponse ) private form_response_repository: Repository<FormResponse>,
        private forms_service: FormsService,
    ) {}

    async create_form_response ( create_response_from_dto: CreateFormResponseDto ) {
        const form = await this.forms_service.find_form_by_id( create_response_from_dto.form_id );
        if ( form === null ) {
            throw new NotFoundException( { description: `No form with id ${create_response_from_dto.form_id} was found` } );
        }
        if ( create_response_from_dto.fields.length != form.fields.length ) {
            throw new BadRequestException( { description: 'Response fields doesn\'t match form\'s' } );
        }
        for ( let i = 0; i < create_response_from_dto.fields.length; i ++ ) {
            if ( create_response_from_dto.fields[i].name != form.fields[i].name ) {
                throw new BadRequestException( { description: 'Response fields doesn\'t match form\'s' } );
            }
        }

        return this.form_response_repository.save( create_response_from_dto );
    }

    async get_all_responses_for_form ( id: number ): Promise<Array<FormResponse>> {
        return await this.form_response_repository.findBy( { form_id: id } )
            .then( ( val ) => {
                return _.sortBy( val, 'id' );
            } );
    }
}
