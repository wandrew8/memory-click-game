import React from 'react';
import './App.css';
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends React.Component {
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  winGame = () => {
    alert("Congratulations! You won the game!");
    this.setState({ score: 0 });
  };

  loseGame = () => {
    alert("Sorry, You Lost! Please try again");
    this.setState({ score: 0 });
  };

  clickCount = id => {
    this.state.friends.find((data, index) => {
      if (data.id === id) {
        if (friends[index].count === 0) {
          friends[index].count = friends[index].count + 1;
          this.setState({ score: this.state.score + 1 });
          this.shuffleArray(friends);
          return true;
        } else {
          this.gameScore();
        }
      }
    });
  }

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  gameScore = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(card => {
      card.count = 0;
    });
    this.loseGame();
    if (this.state.score === 12) {
      this.setState({ highscore: this.state.score });
      this.winGame();

    }
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} highscore={this.state.highscore} />
        <Title />
        <Wrapper>
          {Card}
          {friends.map((friend) => {
            return <Card clickCount={this.clickCount} name={friend.name} image={friend.image} key={friend.id} id={friend.id} />
          })
          }
        </Wrapper>
      </div>
    );
  }
}

export default App;
