import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { FromResponse } from './enitites/form_responce.entity';
import { Form } from './enitites/form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module( {
    imports: [TypeOrmModule.forFeature( [Form, FromResponse] )],
    providers: [FormsService],
    controllers: [FormsController],
} )
export class FormsModule {}
