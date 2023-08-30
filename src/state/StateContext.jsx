import { createContext, useContext, useReducer } from "react";
import reducer, { defaultState } from "./state";
////////////////////useContext////////////////////////////////////////////////////////////
const StateContext = createContext(defaultState);
export const StateProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, defaultState);

const takeDamage = function(id){
  dispatch({type: "TAKE_DAMAGE", payload: id})
  console.log(state.damage)
  setTimeout(() => {
    console.log(" and done")
    console.log(state.damage)
    dispatch({type: "TAKE_DAMAGE", payload: 0})
    
  }, 500);
}

const drawCard = function(){
  const i = Math.floor(Math.random() * state.deck.length)
  console.log(i)
  const drawnCard = state.deck[i]
  

}




  ////////////////////EXPORT FOR FUNCTIONs & STATE////////////////////////////////////////////////////////////
  const value = {
    takeDamage,
    drawCard,
    damage: state.damage,
    turn: state.turn,
    players: state.players,
    deck: state.deck
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