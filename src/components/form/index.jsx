import {
  desc_validation,
  name_validation,
  phone_validation,
} from '../../utils/input_validators'
import { useForm, FormProvider } from 'react-hook-form'
import css from './styles.module.css'
import { Input, Date } from '..'
import { MdLocalPostOffice } from 'react-icons/md'

export const Form = ({ setSuccess }) => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  return (
    <div className={css.container}>
      <FormProvider {...methods}>
        <form
          className={css.form}
          onSubmit={e => e.preventDefault()}
          noValidate
          autoComplete="off"
        >
          <Input {...name_validation} />
          <Input {...phone_validation} />
          <Date />
          <Input {...desc_validation} />
          <button className={css.cta} onClick={onSubmit}>
            <MdLocalPostOffice />
            ارسال اطلاعات
          </button>
        </form>
      </FormProvider>
    </div>
  )
}
