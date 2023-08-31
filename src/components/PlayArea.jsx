import React, { useState } from "react";
import "../styles/playArea.css";
import { color, motion } from "framer-motion";
import shareState from "../state/StateContext";

const PlayArea = function () {
  ///////////////STATE//////////////////////////////
  const { turn, damage, attack, players } = shareState();
  // const [turn, setTurn] = useState(1);
  // const [damage, setDamage] = useState(false)
  //////////////FUNCTIONs//////////////////////////

  /////////////ANIMATIONs//////////////////////////
  const animation = {
    initial: {},
    animate: {
      scale: 0.7,
      backgroundColor: "#888888",
    },
  };

  return (
    <div className="play_area">
      {players.map((player, index) => {
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
                onClick={() => attack(player.playerId === 2 ? 1 : 2, player.hand)}
              ></button>
              <p>Hand: {player.hand}</p>
              <p>Health: {player.health}</p>
            </div>
          </motion.div>
        );
      })}

      <button className="attack" onClick={() => handleClick()} />
    </div>
  );
};

export default PlayArea;
