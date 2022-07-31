import { Test, TestingModule } from '@nestjs/testing';
import { JsonRpcController } from './json_rpc.controller';

describe( 'JsonRpcController', () => {
    let controller: JsonRpcController;

    beforeEach( async () => {
        const module: TestingModule = await Test.createTestingModule( {
            controllers: [JsonRpcController],
        } ).compile();

        controller = module.get<JsonRpcController>( JsonRpcController );
    } );

    it( 'should be defined', () => {
        expect( controller ).toBeDefined();
    } );
} );
