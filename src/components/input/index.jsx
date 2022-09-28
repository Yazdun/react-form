import React from 'react'
import css from './styles.module.css'
import cn from 'classnames'
import { is_input_valid, find_input_error } from '@utils/index'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence } from 'framer-motion'
import { InputError } from '..'

export const Input = ({ name, label, type, id, placeholder, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputErrors = find_input_error(errors, name)
  const isInvalid = is_input_valid(inputErrors)

  return (
    <div className={cn(css.container, isInvalid && css.error)}>
      <div className={css.head}>
        <label htmlFor={id} className={css.label}>
          {label}
        </label>
        <AnimatePresence exitBeforeEnter initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <input
        id={id}
        type={type}
        className={css.input}
        placeholder={placeholder}
        {...register(`${name}`, validation)}
      />
    </div>
  )
}
