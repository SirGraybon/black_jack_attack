import { createContext, useContext, useReducer } from "react";
import reducer, { defaultState } from "./state";
////////////////////useContext////////////////////////////////////////////////////////////
const StateContext = createContext(defaultState);
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const attack = function (id, damage) {
    dispatch({ type: "TAKE_DAMAGE", id, damage });
    dispatch({ type: "ANIMATE_DAMAGE", payload: id });
    console.log(state.damage);
    setTimeout(() => {
      console.log(" and done");
      console.log(state.damage);
      dispatch({ type: "ANIMATE_DAMAGE", payload: 0 });
    }, 100);
    setTimeout(() => {
      console.log(" and done");
      console.log(state.damage);
      dispatch({ type: "ANIMATE_DAMAGE", payload: id });
    }, 200);
    setTimeout(() => {
      console.log(" and done");
      console.log(state.damage);
      dispatch({ type: "ANIMATE_DAMAGE", payload: 0 });
    }, 300);
  };

  const drawCard = function () {
    const deckIndex = Math.floor(Math.random() * state.deck.length);
    const updatedDeck = state.deck;
    const updatedPlayers = state.players;
    const playerIndex = updatedPlayers.findIndex(
      (player) => state.turn === player.playerId
    );
    const drawnCard = updatedDeck[deckIndex];
    updatedPlayers[playerIndex].hand += drawnCard;
    updatedDeck.splice(deckIndex, 1);
    const handValue = updatedPlayers[playerIndex].hand;
    if (handValue > 21) {
      attack(state.turn, handValue);
      updatedPlayers[playerIndex].hand = 0;
      
    }

    dispatch({ type: "HIT_ME", updatedDeck, updatedPlayers });
  };

  ////////////////////EXPORT FOR FUNCTIONs & STATE////////////////////////////////////////////////////////////
  const value = {
    attack,
    drawCard,
    damage: state.damage,
    turn: state.turn,
    players: state.players,
    deck: state.deck,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

const shareState = () => {
  const context = useContext(StateContext);
  return context;
};

export default shareState;
