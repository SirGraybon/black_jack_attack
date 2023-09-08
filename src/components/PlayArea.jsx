import React, { useState } from "react";
import "../styles/playArea.css";
import { motion } from "framer-motion";
import shareState from "../state/StateContext";
import Card from "./Card.jsx";

const PlayArea = function () {
  ///////////////STATE//////////////////////////////
  const { turn, damage, attack, players, currentHand, currentHandTotal } =
    shareState();
  // const [turn, setTurn] = useState(1);
  // const [damage, setDamage] = useState(false)
  //////////////VARIABLEs//////////////////////////
  const inPlayHand = [...currentHand];
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
        if (turn === player.playerId) {
          return (
            <motion.div
              className={`player${player.playerId}`}
              key={player.playerId}
              variants={animation}
              initial="initial"
              animate={damage === player.playerId ? "animate" : "initial"}
              style={{
                backgroundImage:
                  damage === player.playerId
                    ? `url(${player.hurt})`
                    : `url(${player.avatar})`,
              }}
            >
              <div className="health">{player.health}</div>
              <div className="handCards">
                {turn === player.playerId &&
                  inPlayHand.map((card) => {
                    return (
                      <div
                        className="card"
                        style={{ backgroundImage: `url(${card.image})` }}
                      ></div>
                    );
                  })}
              </div>
              <div>
                <p>
                  {turn === player.playerId && `Total: ${currentHandTotal}`}
                </p>
                {turn === player.playerId && (
                  <button
                    className="attack"
                    onClick={() =>
                      attack(player.playerId === 2 ? 1 : 2, currentHandTotal)
                    }
                  >
                    Attack!
                  </button>
                )}
              </div>
            </motion.div>
          );
        } else {
          return (
            <motion.div
              className={`player${player.playerId}`}
              key={player.playerId}
              variants={animation}
              initial="initial"
              animate={damage === player.playerId ? "animate" : "initial"}
              style={{
                backgroundImage:
                  damage === player.playerId
                    ? `url(${player.hurt})`
                    : `url(${player.avatar})`,
              }}
            >
              <div className="health">{player.health}</div>
              <div className="handCards"></div>
            </motion.div>
          );
        }
      })}
    </div>
  );
};

export default PlayArea;
