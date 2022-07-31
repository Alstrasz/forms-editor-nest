import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { FormFieldResponse } from '../../forms/types/form_field_response';
import { Form } from '../../forms/entites/form.entity';

@Entity()
export class FormResponse {
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
