import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFormResponseDto } from './dto/create_form_response.dto';
import { FormResponse } from './entites/form_responce.entity';

@Injectable()
export class ResponsesService {
    constructor ( @InjectRepository( FormResponse ) private form_response_repository: Repository<FormResponse> ) {}

    async create_form_response ( create_response_from_dto: CreateFormResponseDto ) {
        return this.form_response_repository.save( create_response_from_dto );
    }

    async get_all_responses_for_form ( id: number ): Promise<Array<FormResponse>> {
        return this.form_response_repository.findBy( { id } );
    }
}
