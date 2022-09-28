import css from './styles.module.css'
import * as moment from 'jalali-moment'
import { useState } from 'react'
import cn from 'classnames'

export const Date = () => {
  const [active, setActive] = useState(1)
  const days = [1, 2, 3, 4, 5, 6]

  const generator = num =>
    moment().add(num, 'day').locale('fa').format('D/MMMM')

  return (
    <div>
      <p className={css.title}>تاریخ</p>
      <ul className={css.list}>
        {days.map(i => {
          const m = generator(i)
          const day = m.split('/')[0]
          const month = m.split('/')[1]
          const isCurrent = active === i

          return (
            <li key={day}>
              <button
                onClick={() => setActive(i)}
                className={cn(css.cta, isCurrent && css.active)}
                disabled={isCurrent}
              >
                <span className={css.day}>{day}</span>
                <span className={css.month}>{month}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
