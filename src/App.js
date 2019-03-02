import React, { Component } from 'react';
import Nav from "./components/Nav";
import cards from "./cards.json"
import './App.css';
import ClickItems from "./components/ClickItems";

class App extends Component {
  state = {
    cards, 
    score : 0,
    topScore: 0
  }

  
  render() {
    return (
      <div >
        <Nav score = { this.state.score } topScore = { this.state.topScore } />
        { this.state.cards.map( card => (
          <ClickItems 
          key={card.id}
           images = {card.images}
           />

        ))}
      </div>
    );
  }
}

export default App;
