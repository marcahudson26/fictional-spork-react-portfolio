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
                <a href="#">About Me</a>
                <a href="#">My Projects</a>
                <a href="#">My Skills</a>
                <a href="#">Contact Me</a>
                <a href="#">My Github</a>
                <a href="#">LinkedIn</a>
            </nav>
        </>
    )
}