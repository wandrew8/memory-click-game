import React from "react";
import "./style.css";

const Header = props => (
    <header>
        <div className="fixed-top background-header">
            <div className="container-fluid score-holder">
                <ul>
                    <li>
                        <a className="nav-link" href="/">Memory Click Game</a>
                    </li>
                    <li>Click an image to begin!</li>
                    <li>Score: {props.score} | High Score: {props.highscore}</li>
                </ul>
            </div>
        </div>
    </header>
);

export default Header;
