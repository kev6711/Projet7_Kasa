import Banner from "../components/Banner/Banner.jsx"
import bannerAproposImage from "../assets/a_propos-banner-image.png"
import styles from "./pages.module.scss"
import bannerStyles from "../components/Banner/Banner.module.scss"

function A_propos() {
  return (
    <div className={styles["main-content"]}>
      <Banner
        src={bannerAproposImage}
        alt="Image bannière de la page A propos"
        imagestyle={bannerStyles["banner__image--apropos"]}
      />
    </div>
  )
}

export default A_propos
