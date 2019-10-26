import React from 'react';
import "./style.css";

class Card extends React.Component {
    //Is it better to use a boolean here?
    state = {
        count: 0
    };

    //Should this function be defined on the app.js page?
    clickCount = () => {
        this.setState({ count: this.state.count + 1 });
        // How to access the friends array to do sort method?
        //This.props refers to the properties of the clicked item
        console.log(this.props);
        alert("Card clicked")
    };

    render() {
        return (

            < div className="card character-card" onClick={this.clickCount}>
                <div className="view card-background overlay">
                    <img className="character-image" src={this.props.image} alt={this.props.name} />
                </div>
            </div >
        );
    }
}

export default Card;