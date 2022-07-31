import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { FormFieldAny, FormFieldInput, FormFieldSelect, FormFieldTextArea } from '../types/form_field';

@Exclude()
export class FormFieldAnyDto implements FormFieldAny {
    @Expose()
    @IsString()
    @IsNotEmpty()
        name: string;
    @Expose()
    @IsString()
    @IsNotEmpty()
        description: string;
    @Expose()
    @IsString()
    @IsIn( ['input', 'textarea', 'select'] )
        type: string;

    constructor ( data: FormFieldAny ) {
        Object.assign( this, data );
    }
}

@Exclude()
export class FormFieldInputDto extends FormFieldAnyDto implements FormFieldInput {
    @Expose()
        type: 'input' = 'input';

    constructor ( data: FormFieldInput ) {
        super( data );
    }
}

@Exclude()
export class FormFieldTextAreaDto extends FormFieldAnyDto implements FormFieldTextArea {
    @Expose()
        type: 'textarea' = 'textarea';

    constructor ( data: FormFieldTextArea ) {
        super( data );
    }
}

@Exclude()
export class FormFieldSelectDto extends FormFieldAnyDto implements FormFieldSelect {
    @Expose()
        type: 'select' = 'select';
    @Expose()
    @IsArray()
    @IsString( { each: true } )
        options: Array<string>;

    constructor ( data: FormFieldSelect ) {
        super( data );
    }
}

export type FormFieldDto = FormFieldInputDto | FormFieldTextAreaDto | FormFieldSelectDto;

