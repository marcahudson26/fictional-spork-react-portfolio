import { Helmet } from "react-helmet";
import React from 'react';

import Tilt from 'react-parallax-tilt';
import cards from './projects.json'
import "./index.scss"

export default () => {
    return (
        <>
            <Helmet>
                <title>Marc Hudson - about Me</title>
            </Helmet>
            <section className="tittleproject">
                <h1>My Projects</h1>
            </section>

            {cards.map(card => (

                <section className="projectcontainer">
                    <div >
                        <a href={`${card.link}`} target="_blank">
                            <div className="perspective-container">
                                <Tilt glareEnable={true} tiltReverse={true} gyroscope={true}>
                                    <div className="card" style={{ backgroundImage: `url(${card.image})` }}></div>
                                </Tilt>
                            </div>
                        </a>
                    </div>
                    <div>
                        <h2>{card.tittle}</h2>
                        <p>{card.content}</p>
                    </div>
                </section>


            )
            )
            }

        </>
    )

}