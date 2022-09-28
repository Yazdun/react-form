import { name_validation } from '../../utils/input_validators'
import { useForm, FormProvider } from 'react-hook-form'
import css from './styles.module.css'
import { Input } from '..'

export const Form = ({ setSuccess }) => {
  const methods = useForm()

  return (
    <div className={css.container}>
      <FormProvider {...methods}>
        <form className={css.form} onSubmit={e => e.preventDefault()}>
          <Input {...name_validation} />
        </form>
      </FormProvider>
    </div>
  )
}
