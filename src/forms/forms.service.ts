import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import { Repository } from 'typeorm';
import { CreateFormDto } from './dto/create_form.dto';
import { Form } from './entites/form.entity';
import { FormDescriptionShort } from './types/form_description_short';

@Injectable()
export class FormsService {
    constructor ( @InjectRepository( Form ) private form_repository: Repository<Form> ) {}

    async create_form ( create_from_dto: CreateFormDto ) {
        return this.form_repository.save( create_from_dto );
    }

    async find_form_by_id ( id: number ): Promise<Form> {
        return this.form_repository.findOneBy( { id } );
    }

    async get_all_froms_short (): Promise<Array<FormDescriptionShort>> {
        return this.form_repository.find().then( ( forms: Array<Form> ) => {
            return _.map( forms, ( elem ) => {
                return _.pick( elem, ['id', 'name', 'description'] );
            } );
        } );
    }
}
