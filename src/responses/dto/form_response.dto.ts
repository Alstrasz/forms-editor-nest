import { Exclude, Expose, Type } from 'class-transformer';
import _ from 'lodash';
import { FormResponse } from '../../responses/entites/form_responce.entity';
import { JsonRpcResponse } from '../../json_rpc/dto/json-rpc.dto';
import { FormFieldResponse } from 'src/forms/types/form_field_response';
import { IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class FormResponseDto {
    @Expose()
        id: number;

    @Expose()
        form_id: number;

    @Expose()
    @Type( () => FormFieldResponseDto )
        fields: Array<FormFieldResponseDto>;

    @Expose()
        created_at: Date;

    constructor ( data: FormResponse ) {
        Object.assign( this, data );
        this.fields = _.map( data.fields, ( elem ) => {
            return new FormFieldResponseDto( elem );
        } );
    }
}

export class FormResponseDtoJsonRpc extends JsonRpcResponse<FormResponseDto> {
    @Expose()
    @Type( () => FormResponseDto )
        result: FormResponseDto;

    constructor ( data: FormResponseDto, id: number ) {
        super( data, id );
    }
}

export class FormResponsesDtoJsonRpc extends JsonRpcResponse<Array<FormResponseDto>> {
    @Expose()
    @Type( () => FormResponseDto )
        result: Array<FormResponseDto>;

    constructor ( data: Array<FormResponseDto>, id: number ) {
        super( data, id );
    }
}

@Exclude()
export class FormFieldResponseDto implements FormFieldResponse {
    @IsString()
    @IsNotEmpty()
    @Expose()
        name: string;
    @IsString()
    @IsNotEmpty()
    @Expose()
        data: string;

    constructor ( data: FormFieldResponse ) {
        Object.assign( this, data );
    }
}
