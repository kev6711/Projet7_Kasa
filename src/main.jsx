import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./main.scss"
import AppRouter from "./components/Router/AppRouter.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AppRouter />
    </StrictMode>
)
