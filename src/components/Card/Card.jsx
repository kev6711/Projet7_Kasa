import logements from "../../assets/logements.json"
import styles from "./Card.module.scss"

function Card() {
  return (
    <section className={styles["card__container"]}>
      {logements.slice(0, 6).map((logement) => (
        <article className={styles.card} key={logement.id}>
          <img src={logement.cover} alt={logement.title} />
          <p className={styles["card__title"]}>{logement.title}</p>
        </article>
      ))}
    </section>
  )
}

export default Card
