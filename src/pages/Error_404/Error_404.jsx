import styles from "./Error_404.module.scss"
import { Link } from "react-router-dom"

function Error_404() {
    return (
        <section className={styles["error-404"]}>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </section>
    )
}

export default Error_404
