import logo from "../../assets/images/footer-logo.png"
import "./Footer.scss"

function Footer() {
    return (
        <footer>
            <img src={logo} alt="logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
