import { useParams } from "react-router-dom"
import logements from "../assets/logements.json"
import LogementInformations from "../components/LogementInformations/LogementInformations.jsx"
import Slideshow from "../components/Slideshow/Slideshow.jsx"

function Logement() {
    const { id } = useParams()
    const logementArray = logements.filter(function (logement) {
        return logement.id === id
    })
    const logementObject = logementArray[0]
    const logementTitle = logementObject.title
    return (
        <div>
            <Slideshow logementObject={logementObject} logementTitle={logementTitle} />
            <LogementInformations logementObject={logementObject} logementTitle={logementTitle} />
        </div>
    )
}

export default Logement
