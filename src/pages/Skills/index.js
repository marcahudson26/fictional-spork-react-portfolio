import { Helmet } from "react-helmet";
import Meter from "../../components/Meter";
import "./index.scss"
import Marquee from "react-fast-marquee";



export default () => {

    return (
        <>
            <Helmet>
                <title>Marc Hudson - about Me</title>
            </Helmet>

            <section className="tittleabout">
                <h1>mySkills</h1>
            </section>
            <section className="skillscontainer">

                <Meter value={80} name="React" />
                <Meter value={80} name="JS" />
                <Meter value={93} name="HTML5" />
                <Meter value={70} name="Node" />
                <Meter value={90} name="TDD" />
                <Meter value={95} name="CSS" />



            </section>


            <Marquee gradientColor="transparent" pauseOnHover className="skills-bounce">
                <a href="">
                    <img src="/react.png" alt="" />
                </a>
                <a href="">
                    <img src="./js.svg" alt="" />
                </a>
                <a href="">
                    <img src="./HTML5_logo.svg.png" alt="" />
                </a>
                <a href="">
                    <img src="./css.png" alt="" />
                </a>
                <a href="">
                    <img src="./node-node-js-seeklogo.com.svg" alt="" />
                </a>
                <a href="">
                    <img src="./jest.png" alt="" />
                </a>
                <a href="">
                    <img className="" src="./Bootstrap_logo.svg.png" alt="" />
                </a>
            </Marquee>

            <section className="footercontainer">
                <div>

                    <img className="aboutfooter" src="./globe.png" />
                    <h3>Web Development</h3>
                </div>
                <div>

                    <img className="aboutfooter" src="./pngegg jjj(5).png" />
                    <h3>Web Design</h3>
                </div>
                <div>

                    <img className="aboutfooter" src="./phone(1).png" />
                    <h3>Mobile friendly</h3>
                </div>
            </section>



        </>)
}

