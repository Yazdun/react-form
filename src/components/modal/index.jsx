import css from './styles.module.css'
import Lottie from 'lottie-react'
import animationData from './message.json'
import { useRef } from 'react'
import { useOnClickOutside } from '../../hooks'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { framer_background, framer_modal } from './framer'

export const Modal = ({ setOpen }) => {
  const ref = useRef()

  useOnClickOutside(ref, () => setOpen(false))

  const style = {
    height: 300,
    width: 300,
  }

  return (
    <motion.div {...framer_background} className={css.wrapper}>
      <motion.div {...framer_modal} className={css.modal} ref={ref}>
        <button onClick={() => setOpen(false)} className={css.cta}>
          <VscChromeClose />
        </button>
        <Lottie animationData={animationData} loop="false" style={style} />
        <h1>ارسال شد</h1>
        <p className={css.desc}>پیغام شما با موفقیت ارسال گردید</p>
      </motion.div>
    </motion.div>
  )
}
