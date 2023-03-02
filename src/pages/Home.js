import { Helmet } from "react-helmet";
import Hero from "../components/Hero"

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