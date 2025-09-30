import { useState } from "react"
import styles from "./Collapse.module.scss"

function Collapse({ title, description }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <article>
            <div className={styles["collapse__article--title"]}>
                {<h2>{title}</h2>}
                <button onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}>
                    <i className={`fa-solid fa-chevron-up ${isOpen ? styles.open : ""}`}></i>
                </button>
            </div>
            {isOpen &&
                (typeof description === "string" ? (
                    <p className={styles["collapse__article--description"]}>{description}</p>
                ) : (
                    <ul className={styles["collapse__article--description"]}>{description}</ul>
                ))}
        </article>
    )
}

export default Collapse
