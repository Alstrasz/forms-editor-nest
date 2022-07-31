import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, ValidateNested } from 'class-validator';
import { JsonRpcRequest } from '../../json_rpc/dto/json-rpc.dto';

export class IdDto {
    @IsInt()
        id: number;
}

export class IdDtoJsonRpc extends JsonRpcRequest<IdDto> {
    @ValidateNested()
    @Type( () => IdDto )
    @IsNotEmpty()
        params: IdDto;
}
