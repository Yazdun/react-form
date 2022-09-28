export const name_validation = {
  name: 'name',
  label: 'نام',
  type: 'text',
  id: 'name',
  placeholder: 'مهسا امینی',
  validation: {
    required: {
      value: true,
      message: 'الزامی',
    },
    pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: 'Wrong format',
    },
    maxLength: {
      value: 20,
      message: 'Length exceeded',
    },
  },
}
