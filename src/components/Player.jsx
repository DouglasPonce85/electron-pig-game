import React from 'react';

const Player = (props) => {
    return (
        <div>
            <div class="player-name" id="name-0">{props.id}</div>
            <div class="player-score" id="score-0">{props.playerScore}</div>
            <div class="player-current-box">
                <div class="player-current-label">{props.label}</div>
                <div class="player-current-score" id="current-0">{props.currentScore}</div>
            </div>
        </div>
    )
};

export default Player;