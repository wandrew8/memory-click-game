import React from 'react';
import './App.css';
import Header from "./components/Header";
import Title from "./components/Title";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json"

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Title />
        <Wrapper>
          {Card}
          {friends.map((friend) => {
            return <Card name={friend.name} image={friend.image} key={friend.id} />
          })
          }

        </Wrapper>

        <Header />
      </div>
    );
  }
}

export default App;
