import css from './styles.module.css'
import Lottie from 'lottie-react'
import animationData from './message.json'
import { useRef } from 'react'
import { useOnClickOutside } from '../../hooks'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { framer_background, framer_modal } from './framer'

const defaultData = { name: 'یزدان', mobile: '09201378001' }

export const Modal = ({ setOpen, data = defaultData }) => {
  const ref = useRef()
  const { name, mobile } = data

  useOnClickOutside(ref, () => setOpen(false))

  const style = {
    height: 200,
    width: 200,
  }

  return (
    <motion.div {...framer_background} className={css.wrapper}>
      <motion.div {...framer_modal} className={css.modal} ref={ref}>
        <button onClick={() => setOpen(false)} className={css.cta}>
          <VscChromeClose />
        </button>
        <Lottie animationData={animationData} loop="false" style={style} />
        <h1>ارسال شد</h1>
        <p className={css.desc}>
          {name} عزیز, درخواست شما با موفقیت ثبت گردید. برای هماهنگی فرآیند
          مشاوره, همکاران ما در اسرع وقت با شماره موبایل شما{' '}
          <strong>{mobile}</strong> تماس خواهند گرفت
        </p>
      </motion.div>
    </motion.div>
  )
}
