import useUiStore from '../../hooks/useUiStore';
import Nav from '../Nav';

import "./index.scss"

export default ({ children }) => {
    const { playHero, togglePlayHero } = useUiStore()
    return (
        <header>
            {children}
            <Nav />
            <div className="pause-play-wrapper">
                <button className="pause-play" onClick={togglePlayHero}>
                    {!playHero ? "Play" : "Pause"}
                </button>
            </div>
        </header>
    );
};
