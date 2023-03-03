import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import "./about.scss"

export default () => {
    return (
        <>
            <Helmet>
                <title>Marc Hudson - About Me</title>
            </Helmet>

            <section className="abouthero ">
                <div>
                    <h2>
                        Marc Hudson
                    </h2>
                    <h1>Front end Web Engineer </h1>
                </div>
            </section>
            <main class="main ">
                <h3>About Me</h3>
                <div class="slide">
                    <p>Hello, I'm Marc. Up until recently I was a HGV driver, I have recently discovered my love for coding.
                        I
                        started my
                        journey to become a front-end web developer in October 2022. I decided to pursue my interest in
                        programming
                        with help of family members who are software engineers. I have dedicated my spare time to learning
                        these
                        new skills.
                    </p>
                    <p>Throughout this experience so far I have enjoyed paying attention to the small details. I am
                        currently
                        enrolled in a skills
                        bootcamp into front-end web development. I'm fairly new to programming but spend as much of my free
                        time
                        researching JavaScript and HTML/CSS as these particularly interest me.
                    </p>
                    <p>I like using CSS to style pages and make them user friendly. I am constantly learning new techniques
                        to improve my work; in my projects below you can see my portfolio Vol 1 which I look at to just
                        remind
                        me how far I have come in this short time period.
                    </p>
                    <p>My ambition is to eventually become a lead front-end engineer. It will take a lot of time, however, I
                        will not
                        stop putting the effort and time in until I reach my goal. I have pet projects to experiment with as
                        well as
                        pair-programmes to try understand how best to work in a team of developers. This helps me gain
                        insight
                        into
                        good programming practices.
                    </p>
                    <p>I hope to eventually solve real-world problems using technology, and finally kick-start a career in
                        tech.
                    </p>
                </div>
            </main>
            <section className="aboutlower">
                <div>
                    <img src="/vector-svgrepo-com.svg"></img>
                    <h3>Web Design</h3>
                </div>
                <div>
                    <img src="/phone-screen.svg"></img>
                    <h3>Responsive Design</h3>
                </div>
                <div>
                    <img src="/laptop-512.png"></img>
                    <h3>Web Developer</h3>
                </div>
            </section>


        </>
    )
}