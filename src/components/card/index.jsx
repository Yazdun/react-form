import css from './styles.module.css'
import cn from 'classnames'

export const Card = ({ children, onClick, isCurrent }) => {
  return (
    <button
      disabled={isCurrent}
      onClick={onClick}
      className={cn(css.cta, isCurrent && css.active)}
    >
      {children}
    </button>
  )
}
