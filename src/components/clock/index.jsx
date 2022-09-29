import { hours } from '../../utils'
import css from './styles.module.css'
import { Card } from '../'

export const Clock = ({ active, setActive }) => {
  return (
    <div>
      <p className={css.title}>ساعت</p>
      <ul className={css.list}>
        {hours.map((item, idx) => {
          const { title, start, end } = item
          const isCurrent = active === idx
          return (
            <li key={title}>
              <Card onClick={() => setActive(idx)} isCurrent={isCurrent}>
                <p className={css.schedule}>سانس {title}</p>
                <p>
                  <span>{start}:00</span> الی <span>{end}:00</span>
                </p>
              </Card>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
