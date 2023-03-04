import { Helmet } from "react-helmet";
import "./index.scss"
import FluidMeter from "./mySkill";



export default () => {
    // function Marquee(selector, speed) {
    //     const parentSelector = document.querySelector(selector);
    //     const clone = parentSelector.innerHTML;
    //     const firstElement = parentSelector.children[0];
    //     let i = 0;
    //     console.log(firstElement);
    //     parentSelector.insertAdjacentHTML('beforeend', clone);
    //     parentSelector.insertAdjacentHTML('beforeend', clone);

    //     setInterval(function () {
    //         firstElement.style.marginLeft = `-${i}px`;
    //         if (i > parentSelector.children.length * 150 / 3) {
    //             i = 0;
    //         }
    //         i = i + speed;
    //     }, 0);
    // }

    //after window is completed load
    //1 class selector for marquee
    //2 marquee speed 0.2
    // window.addEventListener('load', Marquee('.marquee', 0.2))

    // var fm = new FluidMeter();
    // fm.init({
    //     targetContainer: document.getElementById("fluid-meter"),
    //     fillPercentage: 15,
    //     options: {
    //         fontFamily: "Raleway",
    //         drawPercentageSign: false,
    //         drawBubbles: true,
    //         size: 300,
    //         borderWidth: 19,
    //         backgroundColor: "#e2e2e2",
    //         foregroundColor: "#fafafa",
    //         foregroundFluidLayer: {
    //             fillStyle: "purple",
    //             angularSpeed: 100,
    //             maxAmplitude: 12,
    //             frequency: 30,
    //             horizontalSpeed: -150
    //         },
    //         backgroundFluidLayer: {
    //             fillStyle: "pink",
    //             angularSpeed: 100,
    //             maxAmplitude: 9,
    //             frequency: 30,
    //             horizontalSpeed: 150
    //         }
    //     }
    // });

    // var fm2 = new FluidMeter();
    // fm2.init({
    //     targetContainer: document.getElementById("fluid-meter-2"),
    //     fillPercentage: 75,
    //     options: {
    //         fontFamily: "Oxygen",
    //         drawPercentageSign: true,
    //         drawBubbles: true,
    //         size: 300,
    //         borderWidth: 10,
    //         backgroundColor: "#262626",
    //         foregroundColor: "#4C4A4A",
    //         foregroundFluidLayer: {
    //             fillStyle: "#55DD10",
    //             angularSpeed: 90,
    //             maxAmplitude: 11,
    //             frequency: 25,
    //             horizontalSpeed: -200
    //         },
    //         backgroundFluidLayer: {
    //             fillStyle: "#CDDD10",
    //             angularSpeed: 100,
    //             maxAmplitude: 13,
    //             frequency: 23,
    //             horizontalSpeed: 230
    //         }
    //     }
    // });

    // var fm3 = new FluidMeter();
    // fm3.init({
    //     targetContainer: document.getElementById("fluid-meter-3"),
    //     fillPercentage: 45,
    //     options: {
    //         fontSize: "30px",
    //         drawPercentageSign: true,
    //         drawBubbles: false,
    //         size: 300,
    //         borderWidth: 19,
    //         backgroundColor: "#e2e2e2",
    //         foregroundColor: "#fafafa",
    //         foregroundFluidLayer: {
    //             fillStyle: "#16E1FF",
    //             angularSpeed: 30,
    //             maxAmplitude: 5,
    //             frequency: 30,
    //             horizontalSpeed: -20
    //         },
    //         backgroundFluidLayer: {
    //             fillStyle: "#4F8FC6",
    //             angularSpeed: 100,
    //             maxAmplitude: 3,
    //             frequency: 22,
    //             horizontalSpeed: 20
    //         }
    //     }
    // });


    return (
        <>
            <Helmet>
                <title>Marc Hudson - about Me</title>
            </Helmet>

            <section className="tittleabout">
                <h1>mySkills</h1>
            </section>

            {/* <section className="myskillsbody">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div id="fluid-meter" className="mx-auto"></div>
                            <input type="text" id="percentage-1" type="number" value="50" />
                            <button id="submit-percentage-1">submit</button>
                        </div>
                        <div className="col text-center">
                            <div id="fluid-meter-2"></div>
                            <input type="text" id="percentage-2" type="number" value="50" />
                            <button id="submit-percentage-2">submit</button>
                        </div>
                        <div className="col  text-center">
                            <div id="fluid-meter-3"></div>
                            <input type="text" id="percentage-3" type="number" value="50" />
                            <button id="submit-percentage-3">submit</button>
                        </div>
                    </div>
                </div>

            </section> */}


            <section className="skills marquee">
                <div className="container">
                    <div className="avatar">
                        <a href="">
                            <img src="/react.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="container">
                    <div className="avatar">
                        <a href="">
                            <img src="./js.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="container">
                    <div className="avatar">
                        <a href="">
                            <img src="./HTML5_logo.svg.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="container">
                    <div className="avatar">
                        <a href="">
                            <img src="./css.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="container">
                    <div className="avatar">
                        <a href="">
                            <img src="./node-node-js-seeklogo.com.svg" alt="" />
                        </a>
                    </div>
                </div>
                <div className="container">
                    <div className="avatar">
                        <a href="">
                            <img src="./jest.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="container">
                    <div className="avatar">
                        <a href="">
                            <img className="" src="./Bootstrap_logo.svg.png" alt="" />
                        </a>
                    </div>
                </div>
            </section>

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

