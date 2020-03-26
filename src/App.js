import React, { Component } from 'react';

import HeaderScore from './components/HeaderScore';
import Player from './components/Player';
import GameControls from './components/GameControls';
import * as globals from './utils/globals';

class App extends Component {
  state = {
    activePlayer: 0,
    roundScore: 0,
    gamePlaying: true,
    gameWinningScore: 50,
    diceFaces: 6,
    currentDiceValue: 0,
    currentDiceImg: null,
    diceVisible: true,
    player0: {
      id: globals.idPlayer0,
      panelId: globals.idPanel0,
      playerScore: 0,
      currentScore: 0,
      isActive: true,
      isWinner: false
    },
    player1: {
      id: globals.idPlayer1,
      panelId: globals.idPanel1,
      playerScore: 0,
      currentScore: 0,
      isActive: false,
      isWinner: false
    },
    gameLabel: globals.gameLabel
  }

  getDiceImageSrc(diceNumber) {
    return globals.dices[diceNumber - 1];
  }

  diceVisible = (display) => {
    this.setState({ diceVisible: display });
  }

  switchActivePlayer = () => {
    let currentPlayerKey = '';
    let previousPlayerKey = '';
    let activePlayer = 0;

    if (this.state.activePlayer === 0) {
      activePlayer = 1;
      currentPlayerKey = globals.idPlayer1;
      previousPlayerKey = globals.idPlayer0;
    } else {
      activePlayer = 0;
      currentPlayerKey = globals.idPlayer0;
      previousPlayerKey = globals.idPlayer1;
    }

    const currentPlayer = this.state[currentPlayerKey];
    currentPlayer.isActive = true;

    const previousPlayer = this.state[previousPlayerKey];
    previousPlayer.isActive = false;

    this.setState({
      activePlayer,
      roundScore: 0,
      currentPlayerKey: currentPlayer,
      previousPlayerKey: previousPlayer
    });
  }

  handleOnClickBtnRoll = (e) => {
    if (!this.state.gamePlaying) return;

    // 1. Random number
    const diceValue = Math.floor(Math.random() * this.state.diceFaces) + 1;

    // 2. If dice = 1 change to nextPlayer turn
    if (diceValue === 1) {
      this.switchActivePlayer(true);
      this.diceVisible(false);
      return;
    }

    // 3. Update the round score IF the rolled number was NOT a 1
    const imgDicePath = this.getDiceImageSrc(diceValue);
    const roundScore = this.state.roundScore + diceValue;
    const playerKey = this.state.activePlayer === 0 ? globals.idPlayer0 : globals.idPlayer1;
    const player = this.state[playerKey];
    player.currentScore = roundScore;

    this.setState({
      roundScore,
      diceVisible: true,
      currentDiceValue: diceValue,
      currentDiceImg: imgDicePath,
      playerKey: player
    });
  }

  handleOnClickBtnHold = (e) => {
    if (!this.state.gamePlaying) return;

    const currentPlayerKey = this.state.activePlayer === 0 ? globals.idPlayer0 : globals.idPlayer1;
    const currentPlayer = this.state[currentPlayerKey];
    currentPlayer.playerScore += this.state.roundScore;
    currentPlayer.currentScore = 0;

    let gamePlaying = true;
    if (currentPlayer.playerScore >= this.state.gameWinningScore) {
      gamePlaying = false;
      currentPlayer.isWinner = true;
      this.diceVisible(false);
    }

    this.setState({
      gamePlaying,
      currentPlayerKey: currentPlayer
    });

    this.switchActivePlayer(false);
  }

  handleOnClickBtnNew = (e) => {
    const player0 = this.state.player0;
    player0.playerScore = 0;
    player0.currentScore = 0;
    player0.isActive = true;
    player0.isWinner = false;

    const player1 = this.state.player1;
    player1.playerScore = 0;
    player1.currentScore = 0;
    player1.isActive = false;
    player1.isWinner = false;

    this.setState({
      player0,
      player1,
      activePlayer: 0,
      roundScore: 0,
      gamePlaying: true,
      currentDiceValue: 0,
      currentDiceImg: null,
      diceVisible: false,
    });
  }

  handleOnChangeWinningScore = (e) => {
    this.setState({ gameWinningScore: e.target.value });
  }

  componentDidMount() {
    this.diceVisible(false);
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper clearfix">
          <HeaderScore
            gameLabel={this.state.gameLabel}
            handleOnChangeWinningScore={this.handleOnChangeWinningScore}
            gameWinningScore={this.state.gameWinningScore}
          />

          <div className="game-container">
            <Player {...this.state.player0} />
            <Player {...this.state.player1} />

            <GameControls
              newGame='New game'
              rollMsg='Roll dice'
              holdMsg='Hold'
              gamePlaying={this.state.gamePlaying}
              diceImg={this.state.currentDiceImg}
              diceVisible={this.state.diceVisible}
              handleOnClickBtnRoll={this.handleOnClickBtnRoll}
              handleOnClickBtnHold={this.handleOnClickBtnHold}
              handleOnClickBtnNew={this.handleOnClickBtnNew}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
