import { Module } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';
import { FormResponse } from './entites/form_responce.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormsModule } from 'src/forms/forms.module';

@Module( {
    imports: [
        TypeOrmModule.forFeature( [FormResponse] ),
        FormsModule,
    ],
    providers: [ResponsesService],
    controllers: [ResponsesController],
} )
export class ResponsesModule {}
