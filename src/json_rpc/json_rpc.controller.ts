import { All, BadRequestException, Body, Controller, Redirect } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { IdDto } from 'src/forms/dto/id.dto';
import { JsonRpcRequest } from './dto/json-rpc.dto';

@Controller( 'json-rpc' )
export class JsonRpcController {
    @All()
    @Redirect()
    redirect ( @Body() dto_json_rpc: JsonRpcRequest<any> ) {
        console.log( 'redirecting', dto_json_rpc.method );
        if ( dto_json_rpc.method === 'forms.get_by_id' ) {
            const v = new IdDto();
            Object.assign( v, dto_json_rpc.params );
            return validateOrReject( v )
                .then( () => {
                    return { url: `forms/${dto_json_rpc.params?.id}?jid=${dto_json_rpc.id}`, statusCode: 303 };
                } )
                .catch( ( e ) => {
                    throw new BadRequestException( e );
                } );
        }
        if ( dto_json_rpc.method === 'responses.get_by_id' ) {
            const v = new IdDto();
            Object.assign( v, dto_json_rpc.params );
            return validateOrReject( v )
                .then( () => {
                    return { url: `responses/${dto_json_rpc.params?.id}?jid=${dto_json_rpc.id}`, statusCode: 303 };
                } )
                .catch( ( e ) => {
                    throw new BadRequestException( e );
                } );
        }
        if ( dto_json_rpc.method === 'forms.short' ) {
            return { url: `forms?jid=${dto_json_rpc.id}`, statusCode: 303 };
        }
        return { url: dto_json_rpc.method.replace( '.', '/' ), statusCode: 307 };
    }
}
