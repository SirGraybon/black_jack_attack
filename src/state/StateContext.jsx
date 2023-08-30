import { createContext, useContext, useReducer } from "react";
import reducer, { defaultState } from "./state";
////////////////////useContext////////////////////////////////////////////////////////////
const StateContext = createContext(defaultState);
export const StateProvider = ({ children }) => {
const [state, dispatch] = useReducer(reducer, defaultState);

const takeDamage = function(){
  console.log("done")
  dispatch({type: "TAKE_DAMAGE", payload: true})
  setTimeout(() => {
    console.log(" and done")
    dispatch({type: "TAKE_DAMAGE", payload: false})
    
  }, 500);
}




  ////////////////////EXPORT FOR FUNCTIONs & STATE////////////////////////////////////////////////////////////
  const value = {
    takeDamage,
    damage: state.damage,
    turn: state.turn
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