import React, { Component } from 'react';
import diceImg from './images/dice-5.png';
import HeaderScore from './components/HeaderScore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="wrapper clearfix">
          <HeaderScore />

          <div class="game-container">
            <div class="player-0-panel active">
              <div class="player-name" id="name-0">Player 1</div>
              <div class="player-score" id="score-0">43</div>
              <div class="player-current-box">
                <div class="player-current-label">Current</div>
                <div class="player-current-score" id="current-0">11</div>
              </div>
            </div>

            <div class="player-1-panel">
              <div class="player-name" id="name-1">Player 2</div>
              <div class="player-score" id="score-1">72</div>
              <div class="player-current-box">
                <div class="player-current-label">Current</div>
                <div class="player-current-score" id="current-1">0</div>
              </div>
            </div>

            <button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
            <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
            <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>

            <img src={diceImg} alt="Dice" class="dice" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
