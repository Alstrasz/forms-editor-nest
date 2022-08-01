import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch( HttpException )
export class HttpToJsonRpcExceptionFilter implements ExceptionFilter {
    catch ( exception: HttpException, host: ArgumentsHost ) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();

        response
            .status( status )
            .json( {
                jsonrpc: '2.0',
                id: request.body?.id || request.query['jid'],
                error: {
                    code: this.http_to_jsonrpc_codes( status ),
                    data: exception.getResponse(),
                    message: exception.message,
                },
            } );
    }

    http_to_jsonrpc_codes ( http_status: number ) {
        switch ( http_status ) {
        case 400:
            return 32602;
        case 404:
            return 32601;
        default:
            return 32000;
        }
    }
}
