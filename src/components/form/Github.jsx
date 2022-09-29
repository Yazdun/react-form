import css from './styles.module.css'
import { FaGithub } from 'react-icons/fa'

export const SourceCode = () => {
  return (
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
  )
}
