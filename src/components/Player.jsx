import React from 'react';
import classNames from "classnames";
import { winningCup } from '../utils/globals';

const Player = (props) => {
    return (
        <div className={classNames(props.panelId,
                            props.isActive ? 'active' : '',
                            props.isWinner ? 'winner' : ''
                        )} >
            <div className="player-name" id="name">{props.id}</div>
            <div className="player-score" id="score">{props.playerScore}</div>
            <div className="player-current-box">
                 {
                   props.isWinner ? <img className="winning-cup" id="cup" src={winningCup} /> : ''
                 }
                <div className="player-current-label">{props.label}</div>
                <div className="player-current-score">{props.currentScore}</div>
            </div>
        </div>
    )
};

export default Player;
