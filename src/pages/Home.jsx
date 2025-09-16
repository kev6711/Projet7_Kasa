import Banner from "../components/Banner/Banner.jsx"
import bannerHomeImage from "../assets/home-banner-image.png"
import styles from "./pages.module.scss"
import bannerStyles from "../components/Banner/Banner.module.scss"
import Card from "../components/Card/Card.jsx"

function Home() {
    return (
        <div className={styles["main-content"]}>
            <Banner
                src={bannerHomeImage}
                alt="Image bannière de la page d'accueil"
                imagestyle={bannerStyles["banner__image--home"]}
                title="Chez vous, partout et ailleurs"
            />
            <Card />
        </div>
    )
}

export default Home
