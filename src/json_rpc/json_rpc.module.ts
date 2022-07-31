import { Module } from '@nestjs/common';
import { JsonRpcController } from './json_rpc.controller';

@Module( {
    controllers: [JsonRpcController],
} )
export class JsonRpcModule {}
