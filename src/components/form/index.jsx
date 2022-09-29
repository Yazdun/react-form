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
import { useState } from 'react'

export const Form = ({ setModal, setData }) => {
  const methods = useForm()
  const [date, setDate] = useState(1)
  const [clock, setClock] = useState(0)

  const onSubmit = methods.handleSubmit(data => {
    setModal(true)
    setData(data)
    setDate(1)
    setClock(0)
    methods.reset()
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
          <Date active={date} setActive={setDate} />
          <Clock active={clock} setActive={setClock} />
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
