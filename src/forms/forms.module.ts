import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { FormsController } from './forms.controller';
import { Form } from './entites/form.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module( {
    imports: [TypeOrmModule.forFeature( [Form] )],
    providers: [FormsService],
    controllers: [FormsController],
} )
export class FormsModule {}
