import React from 'react';

const HeaderScore = () => {
    return (
        <div class="input-form">
            <label id="game-label" for="game-label">Enter game score points</label>
            <input type="number" id="game-input" name="game-input"
                placeholder="Score Points" onchange="updateGlobalScore(this.value)" />
        </div>
    );
}

export default HeaderScore;