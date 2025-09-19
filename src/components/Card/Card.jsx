import logements from "../../assets/logements.json"
import styles from "./Card.module.scss"
import { Link } from "react-router-dom"

function Card() {
    return (
        <section className={styles["card__container"]}>
            {logements.map((logement) => (
                <Link key={logement.id} to={`/logement/${logement.id}`}>
                    <article className={styles.card}>
                        <img src={logement.cover} alt={logement.title} />
                        <p className={styles["card__title"]}>{logement.title}</p>
                    </article>
                </Link>
            ))}
        </section>
    )
}

export default Card
