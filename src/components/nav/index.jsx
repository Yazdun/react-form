import css from './styles.module.css'

export const Nav = () => {
  return (
    <nav className={css.wrapper}>
      <div className={css.content}>
        <h1 className={css.title}>رزرو جلسه مشاوره</h1>
      </div>
    </nav>
  )
}
