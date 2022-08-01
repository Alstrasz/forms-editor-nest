import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpToJsonRpcExceptionFilter } from './json_rpc/http_to_json_rpc.filter';

async function bootstrap () {
    const app = await NestFactory.create( AppModule );

    app.useGlobalPipes( new ValidationPipe( { whitelist: true } ) );
    app.useGlobalFilters( new HttpToJsonRpcExceptionFilter() );
    app.enableCors();

    const port = process.env.PORT || 3000;
    const host = process.env.HOST || '127.0.0.1';
    await app.listen( port, host, () => {
        console.log( 'App listening at ', port, host );
    } );
}
bootstrap();
