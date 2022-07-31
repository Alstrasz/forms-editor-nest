import { Type } from 'class-transformer';
import { IsArray, IsInt, IsNotEmpty, ValidateNested } from 'class-validator';
import { FormResponse } from '../entites/form_responce.entity';
import { JsonRpcRequest } from '../../json_rpc/dto/json-rpc.dto';
import { FormFieldResponseDto } from './form_response.dto';

export class CreateFormResponseDto implements Partial<FormResponse> {
    @IsInt()
        form_id: number;
    @ValidateNested( { each: true } )
    @Type( () => FormFieldResponseDto )
    @IsArray()
        fields: Array<FormFieldResponseDto>;
}

export class CreateFormResponseDtoJsonRpc extends JsonRpcRequest<CreateFormResponseDto> {
    @ValidateNested()
    @Type( () => CreateFormResponseDto )
    @IsNotEmpty()
        params: CreateFormResponseDto;
}
