import React, { Component } from 'react';
import Nav from "./components/Nav";
import cards from "./cards.json";
import './App.css';
import ClickItems from "./components/ClickItems";
import './assets/images';
// import {Row, CardPanel, Col} from 'react-materialize';

class App extends Component {
  state = {
    cards, 
    score : 0,
    highScore: 0,
    clicked:[],
    correct: undefined,
    winGame: false
  }

  
  render() {
    return (
      <div >
        <Nav score = { this.state.score } topScore = { this.state.topScore } />
        { this.state.cards.map( card => (
          <ClickItems 
          key={card.id}
          id={card.id}
          shake={!this.state.score && this.state.topScore } 
           images = {card.images}
           />

        ))}
      </div>
    );
  }
}

export default App;
