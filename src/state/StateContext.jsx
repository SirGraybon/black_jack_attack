import { createContext, useContext, useReducer } from "react";
import reducer, { defaultState } from "./state";
////////////////////useContext////////////////////////////////////////////////////////////
const StateContext = createContext(defaultState);
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const attack = function (id, damage) {
    console.log(damage)
    dispatch({ type: "TAKE_DAMAGE", id, damage });
    dispatch({ type: "ANIMATE_DAMAGE", payload: id });

    setTimeout(() => {

      dispatch({ type: "ANIMATE_DAMAGE", payload: 0 });
    }, 100);
    setTimeout(() => {

      dispatch({ type: "ANIMATE_DAMAGE", payload: id });
    }, 200);
    setTimeout(() => {

      dispatch({ type: "ANIMATE_DAMAGE", payload: 0 });
    }, 300);

    dispatch({type: "NEXT_TURN"})
  };

  const drawCard = function () {
    const deckIndex = Math.floor(Math.random() * state.deck.length);
    const updatedDeck = state.deck;
    const updatedPlayers = state.players;
    const playerIndex = updatedPlayers.findIndex(
      (player) => state.turn === player.playerId
    );
    const drawnCard = updatedDeck[deckIndex];
  
    updatedDeck.splice(deckIndex, 1);
    let newHand = state.currentHand + drawnCard
    console.log(newHand)
    
    
    if (newHand > 21) {
      attack(state.turn, newHand);
      newHand = 0
      
    }

    dispatch({ type: "HIT_ME", updatedDeck, newHand});
  };

  ////////////////////EXPORT FOR FUNCTIONs & STATE////////////////////////////////////////////////////////////
  const value = {
    attack,
    drawCard,
    damage: state.damage,
    turn: state.turn,
    players: state.players,
    deck: state.deck,
    currentHand: state.currentHand
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
