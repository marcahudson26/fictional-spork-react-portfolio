import { Helmet } from "react-helmet";
import Hero from "../components/Hero"
import "./home.scss"



export default () => {
    return (
        <>
            <Helmet>
                <title>Marc Hudson - Portfolio</title>
            </Helmet>
            <Hero />
        </>
    )
}