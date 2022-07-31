import { Exclude, Expose, Type } from 'class-transformer';
import { FormDescriptionShort } from '../types/form_description_short';
import { JsonRpcResponse } from '../../json_rpc/dto/json-rpc.dto';

export class FormShortListDtoJsonRpc extends JsonRpcResponse<Array<FormDescriptionShortDto>> {
    @Expose()
    @Type( () => FormDescriptionShortDto )
        result: Array<FormDescriptionShortDto>;

    constructor ( data: Array<FormDescriptionShortDto>, id: number ) {
        super( data, id );
    }
}

@Exclude()
export class FormDescriptionShortDto implements FormDescriptionShort {
    @Expose()
        id: number;
    @Expose()
        name: string;
    @Expose()
        description: string;

    constructor ( data: FormDescriptionShort ) {
        Object.assign( this, data );
    }
}
