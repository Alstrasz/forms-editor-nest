import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { FormField } from '../types/form_field';
import { FormResponse } from '../../responses/entites/form_responce.entity';

@Entity()
export class Form {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        description: string;

    @Column( 'jsonb' )
        fields: Array<FormField>;

    @OneToMany( () => FormResponse, ( from_response: FormResponse ) => from_response.form_id, {
        cascade: ['remove'],
    } )
        responses: Array<FormResponse>;

    @CreateDateColumn()
        created_at: Date;
}
