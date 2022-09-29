import css from './styles.module.css'
import * as moment from 'jalali-moment'
import { Card } from '../card'

export const Date = ({ active, setActive }) => {
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
              <Card onClick={() => setActive(i)} isCurrent={isCurrent}>
                <span className={css.day}>{day}</span>
                <span className={css.month}>{month}</span>
              </Card>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
