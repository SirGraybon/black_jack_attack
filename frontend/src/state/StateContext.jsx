import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./state";
////////////////////useContext////////////////////////////////////////////////////////////
const StateContext = createContext(initialState);
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  ////////////////////PLAYER FUNCTIONs////////////////////////////////////////////////////////////
  const attack = function (id, damage) {
    const updatedPlayers = [...state.players];
    const playerIndex = updatedPlayers.findIndex(
      (player) => id === player.playerId
    );

    if (damage === 21) {
      updatedPlayers[playerIndex].health -= 50;
    } else {
      updatedPlayers[playerIndex].health -= damage;
    }

    if (updatedPlayers[playerIndex].health < 0) {
      updatedPlayers[playerIndex].health = 0;
    }

    dispatch({ type: "TAKE_DAMAGE", updatedPlayers });
    dispatch({ type: "ANIMATE_DAMAGE", payload: id });

    setTimeout(() => {
      dispatch({ type: "ANIMATE_DAMAGE", payload: 0 });
    }, 400);

    setTimeout(() => {
      dispatch({ type: "NEXT_TURN" });
    }, 550);
  };

  ////////////////////CARD FUNCTIONs////////////////////////////////////////////////////////////
  const drawCard = function () {
    const deckIndex = Math.floor(Math.random() * state.deck.length);
    const updatedDeck = [...state.deck];
    const newHand = [...state.currentHand];
    const oldTotal = state.currentHandTotal;
    const drawnCard = updatedDeck[deckIndex];
    const cardValue = drawnCard.value;
    let newTotal = oldTotal + cardValue;
    console.log(oldTotal);
    console.log(cardValue);

    updatedDeck.splice(deckIndex, 1);
    newHand.unshift(drawnCard);

    if (newTotal > 21) {
      attack(state.turn, newTotal);
      newTotal = 0;
    }

    dispatch({ type: "HIT_ME", updatedDeck, newHand, newTotal, drawnCard });
  };

  ////////////////////GAME FUNCTIONs////////////////////////////////////////////////////////////
  const startGame = function () {
    console.log("Start Game");
    dispatch({ type: "START_GAME" });
  };

  const resetGame = function () {
    dispatch({ type: "RESET" });
  };

  const toggleModal = function () {
    dispatch({ type: "TOGGLE_MODAL" });
  };

  ////////////////////EXPORT FOR FUNCTIONs & STATE////////////////////////////////////////////////////////////
  const value = {
    attack,
    drawCard,
    resetGame,
    toggleModal,
    startGame,
    damage: state.damage,
    turn: state.turn,
    players: state.players,
    deck: state.deck,
    currentHand: state.currentHand,
    burnPile: state.burnPile,
    currentHandTotal: state.currentHandTotal,
    topCard: state.topCard,
    gameOverModal: state.gameOverModal,
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
