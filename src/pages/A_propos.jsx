import Banner from "../components/Banner/Banner.jsx"
import bannerAproposImage from "../assets/a_propos-banner-image.png"
import bannerStyles from "../components/Banner/Banner.module.scss"
import Collapse from "../components/Collapse/Collapse.jsx"

function A_propos() {
    return (
        <main>
            <Banner
                src={bannerAproposImage}
                alt="Image bannière de la page A propos"
                imagestyle={bannerStyles["banner__image--apropos"]}
            />
            <Collapse />
        </main>
    )
}

export default A_propos
