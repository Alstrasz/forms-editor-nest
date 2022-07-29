import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { FormField } from '../types/from_field';
import { FromResponse } from './form_responce.entity';

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

    @OneToMany( () => FromResponse, ( from_response: FromResponse ) => from_response.form_id, {
        cascade: ['remove'],
    } )
        responses: Array<FromResponse>;

    @CreateDateColumn()
        created_at: Date;
}
