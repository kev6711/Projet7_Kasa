import styles from "./Slideshow.module.scss"
import arrow_left from "../../assets/arrow_left.png"
import arrow_right from "../../assets/arrow_right.png"
import logements from "../../assets/logements.json"
import { useParams } from "react-router-dom"
import { useState } from "react"

function Slideshow() {
    let [i, setI] = useState(0)
    const { id } = useParams()
    const logementArray = logements.filter(function (logement) {
        return logement.id === id
    })
    const logementObject = logementArray[0]
    const logementPictures = logementObject.pictures
    const logementTitle = logementObject.title

    return (
        <section className={styles.slideshow}>
            <img src={logementPictures[i]} alt={logementTitle} />
            {logementPictures.length > 1 && (
                <>
                    <button
                        className={styles["slideshow__arrow--left"]}
                        onClick={() => setI((prev) => (prev <= 0 ? logementPictures.length - 1 : prev - 1))}>
                        <img src={arrow_left} alt="Flèche précédent" />
                    </button>
                    <button
                        className={styles["slideshow__arrow--right"]}
                        onClick={() => setI((prev) => (prev >= logementPictures.length - 1 ? 0 : prev + 1))}>
                        <img src={arrow_right} alt="Flèche suivant" />
                    </button>
                    <p>
                        {i + 1}/{logementPictures.length}
                    </p>
                </>
            )}
        </section>
    )
}

export default Slideshow
