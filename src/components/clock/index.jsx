import { useState } from 'react'
import { hours } from '../../utils'
import css from './styles.module.css'
import cn from 'classnames'

export const Clock = () => {
  const [active, setActive] = useState(0)

  return (
    <div>
      <p className={css.title}>ساعت</p>
      <ul className={css.list}>
        {hours.map((item, idx) => {
          const { title, start, end } = item
          const isCurrent = active === idx
          return (
            <li key={title}>
              <button
                onClick={() => setActive(idx)}
                className={cn(css.cta, isCurrent && css.active)}
              >
                <p className={css.schedule}>سانس {title}</p>
                <p>
                  <span>{start}:00</span> الی <span>{end}:00</span>
                </p>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
