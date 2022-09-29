import css from './styles.module.css'
import * as moment from 'jalali-moment'
import { Card } from '../card'

export const Date = ({ active, setActive }) => {
  const days = [1, 2, 3, 4, 5, 6]
  const jDays = [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه',
  ]

  const generator = num => {
    const jDate = moment().add(num, 'day').locale('fa').format('D/MMMM')
    const jDay = moment().add(num, 'day').locale('fa').jDay()
    return { jDate, jDay }
  }

  // console.log()

  return (
    <div>
      <p className={css.title}>تاریخ</p>
      <ul className={css.list}>
        {days.map(i => {
          const { jDate, jDay } = generator(i)
          const day = jDate.split('/')[0]
          const month = jDate.split('/')[1]
          const isCurrent = active === i

          return (
            <li key={day}>
              <Card onClick={() => setActive(i)} isCurrent={isCurrent}>
                <p className={css.day}>
                  {day} {month}
                </p>
                <span className={css.month}>{jDays[jDay]}</span>
              </Card>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
