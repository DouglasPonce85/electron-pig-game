import React, { Component } from 'react';
import HeaderScore from './components/HeaderScore';
import Player from './components/Player';
import GameControls from './components/GameControls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="wrapper clearfix">
          <HeaderScore />

          <div class="game-container">
            <div class="player-0-panel active">
              <Player
                id='Player 1'
                label='Current'
                playerScore='43'
                currentScore='11'
              />
            </div>

            <div class="player-1-panel">
              <Player
                id='Player 2'
                label='Current'
                playerScore='72'
                currentScore='0'
              />
            </div>

            <GameControls />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
