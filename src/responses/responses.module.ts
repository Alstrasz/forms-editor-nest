import { Module } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { FormResponse } from './entites/form_responce.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module( {
    imports: [TypeOrmModule.forFeature( [FormResponse] )],
    providers: [ResponsesService],
    controllers: [ResponsesController],
} )
export class ResponsesModule {}
