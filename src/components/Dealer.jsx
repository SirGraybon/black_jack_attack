import "../styles/dealer.css";
import shareState from "../state/StateContext";
import { DeprecatedLayoutGroupContext } from "framer-motion";

export const Dealer = function () {
  const { drawCard, deck, burnPile } = shareState();

  const renderCards = function () {
    for (let i = 0; i < deck.length; i++) {
      return (
        <div
          className="card"
          style={{
            backgroundImage: `url(${deck[i].image})`,
            zIndex: -{ i },
            x: {i},
          }}
        ></div>
      );
    }
  };

  return (
    <div className="dealerComponent">
      <div className="deck" onClick={() => drawCard()}>
        {renderCards()}
      </div>
      <div className="dealer"></div>
      <div className="burnPile"> {burnPile.length} </div>
    </div>
  );
};
