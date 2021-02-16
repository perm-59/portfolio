import {FormlyFieldConfig} from "@ngx-formly/core";

export class InputModel {
  name: string;
  phoneNumber: string;
  email: string

  formField() {
    return <FormlyFieldConfig[]>[
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Name',
          required: true
        }
      },
      {
        key: 'phoneNumber',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'PhoneNumber',
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Name',
          required: true
        }
      }
    ]
  }
}
