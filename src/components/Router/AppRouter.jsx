import Home from "../../pages/Home.jsx"
import Logement from "../../pages/Logement.jsx"
import A_propos from "../../pages/A_propos.jsx"
import Error_404 from "../../pages/Error_404/Error_404.jsx"
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a_propos" element={<A_propos />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/404" element={<Error_404 />} />
                <Route path="*" element={<Error_404 />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
