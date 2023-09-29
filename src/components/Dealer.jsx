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
      turn === 2 ? { x: 50, y: -150, opacity: 0 } : { x: -350, y: -70, opacity: 0 },
    exit: { x: 100, opacity: 0 },
  };
  const deckLength = deck.length / 11
  /////////////component return/////////////////

  return (
    <AnimatePresence mode="wait">
      <div className="dealerComponent">
        <div className="deck"  onClick= { () => deck.length > 0 && drawCard()}>
        {deck.length}
          <div
            className="card"
            style={{
              backgroundImage:  deck.length > 0 && `url(${cardBack})`,
              boxShadow: `-${deckLength}px ${deckLength}px 1px  #d5d7ce`,
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
              zIndex: 2,
              position: "absolute",
              x: "+202",
            }}
            
          ></motion.div>
        </div>

        <div className="burnPile">
          {" "}
          {burnPile.length > 0 &&
            burnPile.map((card) => {
              const modifier = card.id % 2 === 0 ? 0 : card.value * 4
              const angle = (card.value * 2) - modifier
          
              return (
                <motion.div
                  className="card"
                  key={card.id}
                  style={{
                    rotate: angle,
                    backgroundImage: `url(${cardBack})`,
                    zIndex: 2,
                    position: "absolute",
                    // x: "+202",
                  }}
                ></motion.div>
              );
            })}{" "}
        </div>
      </div>
    </AnimatePresence>
  );
};
