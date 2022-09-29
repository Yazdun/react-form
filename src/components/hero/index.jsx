import css from './styles.module.css'
import logo from './logo.svg'

export const Hero = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <h1 className={css.title}>رزرو جلسه مشاوره</h1>
      </div>
    </div>
  )
}
