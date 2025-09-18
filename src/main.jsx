import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./main.scss"
import Home from "./pages/Home.jsx"
import Logement from "./pages/Logement.jsx"
import A_propos from "./pages/A_propos.jsx"
import Error_404 from "./pages/Error_404/Error_404.jsx"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a_propos" element={<A_propos />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/404" element={<Error_404 />} />
                <Route path="*" element={<Error_404 />} />
            </Routes>
            <Footer />
        </Router>
    </StrictMode>
)
