import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Form } from '../entites/form.entity';
import { FormFieldAnyDto, FormFieldDto, FormFieldInputDto, FormFieldSelectDto, FormFieldTextAreaDto } from './form_field.dto';
import { JsonRpcRequest } from '../../json_rpc/dto/json-rpc.dto';

export class CreateFormDto implements Partial<Form> {
    @IsString()
    @IsNotEmpty()
        name: string;
    @IsString()
    @IsNotEmpty()
        description: string;

    @ValidateNested( { each: true } )
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
    @IsArray()
        fields: Array<FormFieldDto>;
}

export class CreateFormDtoJsonRpc extends JsonRpcRequest<CreateFormDto> {
    @ValidateNested()
    @Type( () => CreateFormDto )
    @IsNotEmpty()
        params: CreateFormDto;
}
