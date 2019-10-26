import React from "react";
import "./style.css";

function Wrapper(props) {
    return (
        <div className="container">
            <div className="main-content row">
                {props.children}
            </div>
        </div>
    )
}

export default Wrapper;