import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import styles from "./Header.module.scss"

function Header() {
    const pathname = useLocation().pathname
    return (
        <header>
            <h1>Kasa</h1>
            <nav>
                <img src={logo} alt="logo Kasa" />
                <ul>
                    <li>
                        <Link to="/" className={pathname === "/" ? styles.underlined : ""}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/a_propos" className={pathname === "/a_propos" ? styles.underlined : ""}>
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
