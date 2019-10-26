import React from "react";
import "./style.css";

function Header() {
    return (


        <header>

            <div className="fixed-top background-header">

                <div className="container-fluid score-holder">

                    <ul>
                        <li>
                            <a className="nav-link" href="/">Memory Click Game</a>
                        </li>
                        <li>Click an image to begin!</li>
                        <li>Score: 0 | High Score: 0</li>
                    </ul>
                </div>
            </div>


        </header>
    );
}

export default Header;
