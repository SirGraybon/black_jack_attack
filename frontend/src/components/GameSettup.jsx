

import "../styles/gameSettup.css";

import shareState from "../state/StateContext";

const GameSettup = function () {
  const { startGame } = shareState();

  return (
    <div className="gameSettupContainer" >
      <button onClick={() => startGame()}>Play</button>
      
    </div>
  );
};

export default GameSettup;
