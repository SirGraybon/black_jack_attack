import React, { useState } from "react";
import "../styles/playArea.css";
import { motion } from "framer-motion";
import shareState from "../state/StateContext";
import Card from "./Card.jsx";

const PlayArea = function () {
  ///////////////STATE//////////////////////////////
  const { turn, damage, attack, players, currentHand, currentHandTotal, deck } =
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

  const cardsAnimation = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };
  const damageAnimation = {
    initial: { x: 0, opacity: 0 },
    animate: { x: 100, y: -50, opacity: 1, scale: 0.4 },
    exit: { y: -100, opacity: 0 },
  };

  /////////////FUNCTION RETURN//////////////////////////
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
              <div className="health">
                {player.health}
                {damage === player.playerId && (
                  <motion.div
                    className="damage"
                    key={damage}
                    variants={damageAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    {currentHandTotal}
                  </motion.div>
                )}
              </div>
              <div className="cardsArea">
                <div className="handCards">
                  {turn === player.playerId &&
                    inPlayHand.map((card) => {
                      return (
                        <motion.div
                          className="card"
                          key={card.id}
                          variants={cardsAnimation}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          style={{ backgroundImage: `url(${card.image})` }}
                        ></motion.div>
                      );
                    })}
                  <div>
                    {turn === player.playerId && (
                      <motion.div
                        className="attack"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          currentHandTotal > 0 &&
                          attack(
                            player.playerId === 2 ? 1 : 2,
                            currentHandTotal
                          )
                        }
                      >
                        {currentHandTotal}
                      </motion.div>
                    )}
                  </div>
                </div>
                <div className="handCards"></div>
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
              <div className="health">
                {player.health}
                {damage === player.playerId && (
                  <motion.div
                    className="damage"
                    key={damage}
                    variants={damageAnimation}
                    initial="initial"
                    animate="animate"
                  >
                    {currentHandTotal}
                  </motion.div>
                )}
              </div>
              <div className="handCards"></div>
            </motion.div>
          );
        }
      })}
    </div>
  );
};

export default PlayArea;
