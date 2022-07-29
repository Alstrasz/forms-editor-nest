import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './forms/forms.module';

@Module( {
    imports: [
        FormsModule,
        TypeOrmModule.forRoot( {
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
    ],
    controllers: [AppController],
    providers: [AppService],
} )
export class AppModule {}
