import { FormlyFieldConfig } from '@ngx-formly/core';

export const addTaskConfig: FormlyFieldConfig[] = [
    {
      key: 'title',
      type: 'input',
      className: 'd-md-block w-100',
      props: {
        label: 'Title',
        placeholder: 'Enter title',
        required: true,
      }
    },
    {
      key: 'summary',
      type: 'textarea',
      className: 'd-md-block w-100',
      props: {
        label: 'Summary',
        placeholder: 'Enter Summary',
        required: true,
        rows: 5
      }
    },
    {
      key: 'date',
      type: 'input',
      className: 'd-md-block w-100',
      props: {
        type: 'date',
        label: 'Due Date',
        placeholder: 'Enter Due date',
        required: true
      }
    }
  ];