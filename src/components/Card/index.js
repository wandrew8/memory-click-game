import React from 'react';
import "./style.css";

function Card(props) {

    return (

        < div className="card character-card" onClick={() => props.clickCount(props.id)}>
            <div className="view card-background overlay">
                <img className="character-image" src={props.image} alt={props.name} />
            </div>
        </div >
    );
}


export default Card;