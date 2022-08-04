import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './forms/forms.module';
import { ResponsesModule } from './responses/responses.module';
import { JsonRpcModule } from './json_rpc/json_rpc.module';

@Module( {
    imports: [
        FormsModule,
        TypeOrmModule.forRoot(
            process.env.DATABASE_URL ?
                {
                    type: 'postgres',

                    url: process.env.DATABASE_URL,

                    synchronize: true,
                    autoLoadEntities: true,
                    ssl: process.env.POSTGRES_USE_SSL !== undefined,
                    extra: process.env.POSTGRES_USE_SSL === undefined ? undefined : {
                        ssl: {
                            rejectUnauthorized: false,
                        },
                    },
                } :
                {
                    type: 'postgres',

                    host: process.env.POSTGRES_HOST || 'localhost',
                    port: parseInt( process.env.POSTGRES_PORT || '5432' ),
                    username: process.env.POSTGRES_USER || 'root',
                    password: process.env.POSTGRES_PASSWORD || 'root',
                    database: process.env.POSTGRES_DB || 'test',

                    synchronize: true,
                    autoLoadEntities: true,
                    ssl: process.env.POSTGRES_USE_SSL !== undefined,
                    extra: process.env.POSTGRES_USE_SSL === undefined ? undefined : {
                        ssl: {
                            rejectUnauthorized: false,
                        },
                    },
                } ),
        ResponsesModule,
        JsonRpcModule,
    ],
    controllers: [AppController],
    providers: [AppService],
} )
export class AppModule {}
