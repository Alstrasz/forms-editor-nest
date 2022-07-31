export type FormField = FormFieldInput | FormFieldTextArea | FormFieldSelect;

interface FormFieldAny {
    name: string;
    description: string;
    type: string;
}

export interface FormFieldInput extends FormFieldAny {
    type: 'input';
}

export interface FormFieldTextArea extends FormFieldAny {
    type: 'textarea';
}

export interface FormFieldSelect extends FormFieldAny {
    type: 'select';
    options: Array<string>;
}
