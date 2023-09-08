import { createContext, useContext, useReducer } from "react";
import reducer, { defaultState } from "./state";
////////////////////useContext////////////////////////////////////////////////////////////
const StateContext = createContext(defaultState);
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const attack = function (id, damage) {
    console.log(damage)
    if (damage === 21) {

      dispatch({ type: "TAKE_DAMAGE", id, damage:50 });
    } else {

      dispatch({ type: "TAKE_DAMAGE", id, damage });
    }

    dispatch({ type: "ANIMATE_DAMAGE", payload: id });

    setTimeout(() => {

      dispatch({ type: "ANIMATE_DAMAGE", payload: 0 });
    }, 300);
  


    setTimeout(() => {

      dispatch({type: "NEXT_TURN"});
    }, 550);

    
  };

  const drawCard = function () {
    const topCard = {...state.topCard}
    const deckIndex = Math.floor(Math.random() * state.deck.length);
    const updatedDeck = state.deck;
    const newHand = state.currentHand
    let newTotal = state.currentHandTotal       
    const drawnCard = updatedDeck[deckIndex];
    const cardValue = topCard.value;
    newTotal += cardValue
  
    updatedDeck.splice(deckIndex, 1);
    newHand.push(topCard)
    
   
    
    
    if (newTotal > 21) {
      attack(state.turn, newTotal);
      newTotal = 0
      
    }

    dispatch({ type: "HIT_ME", updatedDeck, newHand, newTotal, drawnCard});
  };

  ////////////////////EXPORT FOR FUNCTIONs & STATE////////////////////////////////////////////////////////////
  const value = {
    attack,
    drawCard,
    damage: state.damage,
    turn: state.turn,
    players: state.players,
    deck: state.deck,
    currentHand: state.currentHand,
    burnPile: state.burnPile,
    currentHandTotal: state.currentHandTotal,
    topCard: state.topCard
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
