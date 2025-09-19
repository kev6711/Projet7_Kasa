import styles from "./Error_404.module.scss"
import { Link } from "react-router-dom"

function Error_404() {
    return (
        <main>
            <section className={styles["error-404"]}>
                <h2>404</h2>
                <h3>Oups! La page que vous demandez n'existe pas.</h3>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </section>
        </main>
    )
}

export default Error_404
