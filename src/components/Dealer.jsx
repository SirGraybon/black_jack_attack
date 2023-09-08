import "../styles/dealer.css";
import shareState from "../state/StateContext";
import { AnimatePresence, motion } from "framer-motion";
import cardBack from "../assets/cards/cardback.png"

export const Dealer = function () {
  const { drawCard, deck, burnPile, topCard } = shareState();
  /////////////ANIMATIONs/////////////////
  const animation = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };
  /////////////component return/////////////////

  return (
    <AnimatePresence mode="wait">
      <div className="dealerComponent">
        <div className="deck" onClick={() => drawCard()}>
          <motion.div
            className="card"
            key={deck}
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              backgroundImage: `url(${cardBack})`,
            }}
          ></motion.div>
        </div>
        <div className="dealer"></div>
        <div className="burnPile"> {burnPile.length} </div>
      </div>
    </AnimatePresence>
  );
};
