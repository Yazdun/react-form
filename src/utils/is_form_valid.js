export const is_form_valid = formState => {
  if (Object.keys(formState).length > 0) return true
  return false
}
