import useUiStore from '../../hooks/useUiStore';
import Nav from '../Nav';

import "./index.scss"

export default ({ children }) => {
    const { playHero, togglePlayHero } = useUiStore()
    return (
        <header>
            {children}
            <Nav />

        </header>
    );
};
