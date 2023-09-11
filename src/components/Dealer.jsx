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
    exit: { x: 100, opacity: 0 },
  };
  /////////////component return/////////////////

  return (
    <AnimatePresence mode="wait" >
      <div className="dealerComponent">
        <div className="deck" onClick={() => drawCard()}>
          <div className="card" style={{
              backgroundImage: `url(${cardBack})`,
              boxShadow: "-3px 3px 1px  #6f6f72" 
            }} />
          <motion.div
            className="card"
            key={deck}
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              backgroundImage: `url(${cardBack})`, zIndex: 2, position: "absolute", x: "+202"
            }}
          ></motion.div>
        </div>
        <div className="dealer"></div>
        <div className="burnPile"> {burnPile.length} </div>
      </div>
    </AnimatePresence>
  );
};
