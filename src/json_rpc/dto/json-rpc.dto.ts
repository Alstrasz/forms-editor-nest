import { Exclude, Expose } from 'class-transformer';
import { Allow, Equals, IsInt, IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class JsonRpcResponse<T> {
    @Expose()
        jsonrpc: '2.0' = '2.0';
    @Expose()
        result: T;
    @Expose()
        id: number;

    constructor ( data: T, id: number ) {
        this.result = data;
        this.id = id;
    }
}

export class JsonRpcRequest<T> {
    @IsString()
    @Equals( '2.0' )
        jsonrpc: '2.0';
    @IsString()
    @IsNotEmpty()
        method: string;

    @Allow()
        params: T;
    @IsInt()
        id: number;
}
