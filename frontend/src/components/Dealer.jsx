import "../styles/dealer.css";
import shareState from "../state/StateContext";
import { AnimatePresence, motion } from "framer-motion";
import cardBack from "../assets/cards/cardback.png";

export const Dealer = function () {
  const { drawCard, deck, burnPile, topCard, turn } = shareState();
  /////////////ANIMATIONs/////////////////
  const animation = {
    initial: { x: 0, opacity: 1 },
    animate:
      turn === 2 ? { x: 150, y: -150, opacity: 0 } : { x: -350, y: -150, opacity: 0 },
    exit: { x: 100, opacity: 0 },
  };
  const deckLength = deck.length / 11
  /////////////component return/////////////////

  return (
    <AnimatePresence mode="wait">
      <div className="dealerComponent">
        <div className="cardBox">

        <div className="deck"  onClick= { () => deck.length > 0 && drawCard()}>
        {deck.length}
          <div
            className="card"
            style={{
              backgroundImage:  deck.length > 0 && `url(${cardBack})`,
              boxShadow: `-${deckLength}px ${deckLength}px 1px  #9e9e9d`,
            }}
            />
          <motion.div
            className="card"
            key={deck}
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              backgroundImage: `url(${cardBack})`,
              position: "absolute",
              x: "+202",
            }}
            
            ></motion.div>
        </div>

        <div className="burnPile">
          {" "}
          {burnPile.length > 0 &&
            burnPile.map((card) => {
              const modifier = card.id % 2 === 0 ? 0 : card.value * 6
              const angle = (card.value * 3) - modifier
              const x = card.id % 5 === 0 ? 8 : 0
              const y = card.id % 6 === 0 ? 8 : 0
              
              return (
                <motion.div
                className="card"
                key={card.id}
                style={{
                  rotate: angle,
                  backgroundImage: `url(${cardBack})`,
                  position: "absolute",
                  x: x,
                  y: y
                  // x: "+202",
                }}
                ></motion.div>
                );
              })}{" "}
              </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
