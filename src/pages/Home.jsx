import Banner from "../components/Banner/Banner.jsx"
import bannerHomeImage from "../assets/home-banner-image.png"
import bannerStyles from "../components/Banner/Banner.module.scss"
import Card from "../components/Card/Card.jsx"

function Home() {
    return (
        <main>
            <Banner
                src={bannerHomeImage}
                alt="Image bannière de la page d'accueil"
                imagestyle={bannerStyles["banner__image--home"]}
                title="Chez vous, partout et ailleurs"
            />
            <Card />
        </main>
    )
}

export default Home
