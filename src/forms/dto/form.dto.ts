import { Exclude, Expose, Type } from 'class-transformer';
import * as _ from 'lodash';
import { Form } from '../entites/form.entity';
import { FormFieldDto, FormFieldAnyDto, FormFieldInputDto, FormFieldSelectDto, FormFieldTextAreaDto } from './form_field.dto';
import { JsonRpcResponse } from '../../json_rpc/dto/json-rpc.dto';


@Exclude()
export class FormDto {
    @Expose()
        id: number;

    @Expose()
        name: string;

    @Expose()
        description: string;

    @Expose()
    @Type( () => FormFieldAnyDto, {
        discriminator: {
            property: 'type',
            subTypes: [
                { value: FormFieldInputDto, name: 'input' },
                { value: FormFieldTextAreaDto, name: 'textarea' },
                { value: FormFieldSelectDto, name: 'select' },
            ],
        },
        keepDiscriminatorProperty: true,
    } )
        fields: Array<FormFieldDto>;

    @Expose()
        created_at: Date;

    constructor ( data: Form ) {
        Object.assign( this, data );
        this.fields = _.map( data.fields, ( elem ) => {
            switch ( elem.type ) {
            case 'input':
                return new FormFieldInputDto( elem );
            case 'textarea':
                return new FormFieldTextAreaDto( elem );
            case 'select':
                return new FormFieldSelectDto( elem );
            }
        } );
    }
}

export class FormDtoJsonRpc extends JsonRpcResponse<FormDto> {
    @Expose()
    @Type( () => FormDto )
        result: FormDto;

    constructor ( data: FormDto, id: number ) {
        super( data, id );
    }
}
