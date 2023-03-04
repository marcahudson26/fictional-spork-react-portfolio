import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import "./about.scss"

export default () => {
    return (
        <>
            <Helmet>
                <title>Marc Hudson - About Me</title>
            </Helmet>

            <section className="abouthero">
                <div className="ornament">
                    <h2>
                        About
                    </h2>
                    <h1>Marc Hudson</h1>
                </div>
                <div>
                    <img src="/aboutheadimag.png" />
                </div>
            </section>
            <main class="main ">
                <div class="slide">
                    <p>As the clattering of steam-powered machinery echoes through the air, a figure emerges from the mist, a web engineer Marc Hudson with a unique set of skills and a passion for innovation.
                    </p>
                    <p>Born into a world of gears and cogs, once trained as a soldier, and now father to 6 children, this engineer learned the intricacies of web development later in life. They are honing their skills in the fiery furnace of the steam-powered internet, and hope to one day emerged a master of their craft.
                    </p>
                    <p>But it's not just about the code. This engineer understands the importance of user experience, and is constantly seeking out new ways to create engaging and intuitive interfaces. They are constantly resurrecting new trends and technologies, always striving to push the boundaries of what's possible.
                    </p>
                </div>
            </main>
            <section className="cvcta">
                <a href="" >
                    <img src="/pinpng.com-steampunk-png-375722.png" />
                </a>

            </section>
        </>
    )
}