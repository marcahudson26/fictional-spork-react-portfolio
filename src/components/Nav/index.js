import { Link } from "react-router-dom";
import "./index.scss";

export default () => {
    return (
        <>
            <input type="checkbox" className="hide" id="menu-trigger" role="button" title="menu" />
            <label htmlFor="menu-trigger" aria-hidden="true" title="menu">
                <span className="burger">
                    <span className="bar">
                        <span className="visually-hidden">Menu</span>
                    </span>
                </span>
            </label>
            <nav id="menu">
                <Link to="/about">About Me</Link>
                <a href="#">My Projects</a>
                <a href="#">My Skills</a>
                <a href="#">Contact Me</a>
                <a href="https://github.com/marcahudson26">My Github</a>
                <a href="https://www.linkedin.com/in/marc-hudson-53546a259/">LinkedIn</a>
            </nav>
        </>
    )
}