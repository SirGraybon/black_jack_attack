import React, { useState } from "react";
import "../styles/playArea.css";
import { color, motion } from "framer-motion";
import shareState from "../state/StateContext";

const PlayArea = function () {

  ///////////////STATE//////////////////////////////
  const { turn, damage, takeDamage, players } = shareState();
  // const [turn, setTurn] = useState(1);
  // const [damage, setDamage] = useState(false)
  //////////////FUNCTIONs//////////////////////////
  const handleClick = function () {
    turn === 1 ? setTurn(2) : setTurn(1);
  };
  const attack = function () {
    setDamage(true);
    setTimeout(() => {
      setDamage(false);
    }, 500);
  };

  /////////////ANIMATIONs//////////////////////////
  const animation = {
    initial: {},
    animate: {
      scale: 0.7,
      backgroundColor: "blue"
      
      },
    }
  

  return (
    <div className="play_area">
      {players.map((player) => {
        return (
          <motion.div
            key={player.playerId}
            style={
              turn === player.playerId ? { scale: 1, x: +15 } : { scale: 0.9 }
            }
            variants={animation}
            initial="initial"
            animate={damage === player.playerId ? "animate" : "initial"}
            className="player"
          >
            <div className="hand">
            <button
              className="attack"
              onClick={() => takeDamage(player.playerId)}
              ></button>
              {player.hand}

              </div>
          </motion.div>
        );
      })}

      <button className="attack" onClick={() => handleClick()} />
    </div>
  );
};

export default PlayArea;
