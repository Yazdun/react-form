import {
  desc_validation,
  name_validation,
  phone_validation,
} from '../../utils/input_validators'
import { useForm, FormProvider } from 'react-hook-form'
import css from './styles.module.css'
import { Input, Date, Clock } from '..'
import { MdLocalPostOffice } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

export const Form = ({ setSuccess }) => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })

  return (
    <div className={css.container} id="form">
      <FormProvider {...methods}>
        <form
          className={css.form}
          onSubmit={e => e.preventDefault()}
          noValidate
          autoComplete="off"
        >
          <div className={css.inputs}>
            <Input {...name_validation} />
            <Input {...phone_validation} />
          </div>
          <Date />
          <Clock />
          <Input {...desc_validation} />
          <button className={css.cta} onClick={onSubmit}>
            <MdLocalPostOffice />
            ارسال اطلاعات
          </button>
          <div className={css.github}>
            <a
              href="https://github.com/Yazdun/react-form"
              target="_blank"
              rel="noreferrer"
              className={css.link}
            >
              <FaGithub /> سورس کد
            </a>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
