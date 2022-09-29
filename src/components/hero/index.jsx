import css from './styles.module.css'

export const Hero = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <h1 className={css.title}>
          مشاوره آنلاین <span>با حرفه ای ترین ها</span>
        </h1>
        {/* <p className={css.desc}>
          افتخار ما همراهی با ده‌ها سازمان، شتابدهنده، دانشگاه و مجموعه
          سرمایه‌گذاری در حوزه کسب و کار و کارآفرینی است. اگر برای رشد فردی یا
          کسب و کارت نیاز به تجربه و همفکری داری, مشاوره اختصاصی آنلاین رو
          امتحان کن
        </p> */}
      </div>
    </div>
  )
}
