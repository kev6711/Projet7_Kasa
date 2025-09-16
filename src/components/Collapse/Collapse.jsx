import { useState } from "react"
import styles from "./Collapse.module.scss"

function CollapseArticle({ title, children }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <article>
            <div className={styles["collapse__article--title"]}>
                {<h2>{title}</h2>}
                <button onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}>
                    <i className={`fa-solid fa-chevron-up ${isOpen ? styles.open : ""}`}></i>
                </button>
            </div>
            {isOpen && <p className={styles["collapse__article--description"]}>{children}</p>}
        </article>
    )
}

function Collapse() {
    return (
        <section className={styles.collapse}>
            <CollapseArticle title="Fiabilité">
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux
                logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
            </CollapseArticle>

            <CollapseArticle title="Respect">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme.
            </CollapseArticle>

            <CollapseArticle title="Service">
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à
                nous contacter si vous avez la moindre question.
            </CollapseArticle>

            <CollapseArticle title="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte
                qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous
                organisons également des ateliers sur la sécurité domestique pour nos hôtes.
            </CollapseArticle>
        </section>
    )
}

export default Collapse
