import React from 'react';

const GameControls = (props) => {
    return (
        <div>
            {props.gamePlaying ?
                (
                    <div>
                        <button className="btn-roll" onClick={props.handleOnClickBtnRoll} >
                            <i className="ion-ios-loop"></i>{props.rollMsg}
                        </button>
                        <button className="btn-hold" onClick={props.handleOnClickBtnHold}>
                            <i className="ion-ios-download-outline"></i>{props.holdMsg}
                        </button>
                    </div>
                ) : (
                    <button className="btn-new" onClick={props.handleOnClickBtnNew}>
                        <i className="ion-ios-plus-outline"></i>{props.newGame}
                    </button>
                )}
            {props.diceVisible ? <img src={props.diceImg} alt="Dice" className="dice" /> : ''}
        </div>
    )
};

export default GameControls;
