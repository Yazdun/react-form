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
    maxLength: {
      value: 30,
      message: 'حداکثر 30 حرف',
    },
  },
}
