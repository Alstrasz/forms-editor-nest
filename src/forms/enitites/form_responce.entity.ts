import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { FormFieldResponse } from '../types/form_field_response';
import { Form } from './form.entity';

@Entity()
export class FromResponse {
    @PrimaryGeneratedColumn()
        id: number;

    @ManyToOne( () => Form )
    @JoinColumn( { name: 'form_id' } )
        form: Form;

    @Column()
        form_id: number;

    @Column( 'jsonb' )
        fields: Array<FormFieldResponse>;

    @CreateDateColumn()
        created_at: Date;
}
