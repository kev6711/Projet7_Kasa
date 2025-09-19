import { CollapseArticle } from "../Collapse/Collapse"
import styles from "./LogementInformations.module.scss"

function LogementInformations({ logementObject, logementTitle }) {
    const logementLocation = logementObject.location
    const logementTags = logementObject.tags
    const logementHostName = logementObject.host.name
    const logementHostPicture = logementObject.host.picture
    const logementRating = logementObject.rating
    const logementDescription = logementObject.description
    const logementEquipments = logementObject.equipments

    return (
        <section className={styles.informations}>
            <div className={styles["informations__main-content"]}>
                <div>
                    <h2>{logementTitle}</h2>
                    <p className={styles["informations__location"]}>{logementLocation}</p>
                    <div className={styles["informations__tags"]}>
                        {logementTags.map((tag) => (
                            <p key={tag} className={styles["informations__tags--tag"]}>
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
                <div className={styles["informations__right--container"]}>
                    <div className={styles["informations__host"]}>
                        <p className={styles["informations__host--name"]}>{logementHostName}</p>
                        <img
                            className={styles["informations__host--picture"]}
                            src={logementHostPicture}
                            alt={logementTitle}
                        />
                    </div>
                    <div className={styles["informations__rating"]}>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <i
                                key={index}
                                className={`fa-solid fa-star ${index < logementRating ? styles.active : ""}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles["informations__collapse"]}>
                <CollapseArticle title="Description" description={logementDescription} />
                <CollapseArticle
                    title="Équipements"
                    description={logementEquipments.map((equipment) => (
                        <li key={equipment}>{equipment}</li>
                    ))}
                />
            </div>
        </section>
    )
}

export default LogementInformations
