import React from 'react';

const HeaderScore = (props) => {
    return (
        <div className="input-form">
            <label id="game-label" htmlFor="game-label">{props.gameLabel}</label>
            <input type="number" id="game-input" name="game-input" placeholder="Score Points"
                onChange={props.handleOnChangeWinningScore}
                value={props.gameWinningScore} />
        </div>
    );
}

export default HeaderScore;