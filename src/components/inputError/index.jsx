import React from 'react'
import { motion } from 'framer-motion'
import { framer_error } from './framer'
import css from './styles.module.css'

export const InputError = ({ message }) => {
  return (
    <motion.p className={css.error} {...framer_error}>
      {message}
    </motion.p>
  )
}
