import styles from "./Banner.module.scss"

function Banner({ src, alt, imagestyle, title }) {
  return (
    <section className={styles.banner}>
      <img className={imagestyle} src={src} alt={alt} />
      {title ? <h2 className={styles.title}>{title}</h2> : null}
    </section>
  )
}

export default Banner
