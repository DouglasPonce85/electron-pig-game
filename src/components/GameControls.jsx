import React from 'react';
import diceImg from '../images/dice-5.png';

const GameControls = () => {
    return (
        <div>
            <button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
            <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
            <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
            <img src={diceImg} alt="Dice" class="dice" />
        </div>
    )
};

export default GameControls;