import React from 'react'
import useUiStore from "../../hooks/useUiStore";

import "./index.scss";

export default () => {
    const videoRef = React.useRef(null);
    const { playHero } = useUiStore();

    React.useEffect(() => {
        if (playHero) {
            videoRef.current.play();
            return
        }
        videoRef.current.pause();
    }, [playHero])

    return (
        <>
            <video playsInline autoPlay muted loop ref={videoRef}>
                <source src="/light.mp4" type="video/mp4" />
            </video>
            <section className="hero">
                <div>
                    <h2>
                        <span className="subtext"></span> <span className="name typewriter">Marc Hudson</span>
                    </h2>
                    <h1>Portfolio</h1>
                </div>
            </section>
        </>
    )
}
