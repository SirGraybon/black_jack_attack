import React, { useState } from "react";
import "../styles/playArea.css";
import { color, motion } from "framer-motion";
import shareState from "../state/StateContext";
import Card from "./Card.jsx";

const PlayArea = function () {
  ///////////////STATE//////////////////////////////
  const { turn, damage, attack, players, currentHand, currentHandTotal } = shareState();
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
            className="player"
            key={player.playerId}
            variants={animation}
            initial="initial"
            animate={damage === player.playerId ? "animate" : "initial"}
          >
            <div className="hand">
              <p>Health: {player.health}</p>
              <p> {turn === player.playerId && `Total: ${currentHandTotal}`}</p>
              {turn === player.playerId && (
                <button
                  className="attack"
                  onClick={() =>
                    attack(player.playerId === 2 ? 1 : 2, currentHandTotal)
                  }
                >
                  {" "}
                  Attack!
                </button>
              )}
            </div>
            <div className="handCards">
              {turn === player.playerId &&
                currentHand.map((card) => {
                  return (
                    <div
                      className="card"
                      style={{ backgroundImage: `url(${card.image})` }}
                    ></div>
                  );
                })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PlayArea;
