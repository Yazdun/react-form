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

export const phone_validation = {
  name: 'mobile',
  label: 'موبایل',
  type: 'number',
  id: 'mobile',
  placeholder: '09201378001',
  validation: {
    required: {
      value: true,
      message: 'الزامی',
    },
    pattern: {
      value: /^0[0-9]{2,}[0-9]{7,}$/,
      message: 'نامعتبر',
    },
  },
}
