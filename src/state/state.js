/////////////////IMPORTs///////////////////////////////////////////////////////////////////////////
import oneHeart from "../assets/cards/1Heart.png";

const players = [
  { playerId: 1, hand: 0, health: 175 },
  { playerId: 2, hand: 0, health: 175 },
];
////
const cards = [
  { value: 1, image: oneHeart },
  { value: 2, image: oneHeart },
  { value: 3, image: oneHeart },
  { value: 4, image: oneHeart },
  { value: 5, image: oneHeart },
  { value: 6, image: oneHeart },
  { value: 7, image: oneHeart },
  { value: 8, image: oneHeart },
  { value: 9, image: oneHeart },
  { value: 10, image: oneHeart },
  { value: 11, image: oneHeart },
  { value: 12, image: oneHeart },
  { value: 13, image: oneHeart },
];

export const defaultState = {
  turn: 1,
  damage: 0,
  players: players,
  deck: cards,
  currentHand: [],
  currentHandTotal: 0,
  burnPile: [],
};
////////////////////REDUCER SWITCH CASEs////////////////////////////////////////////////////////////
export const reducer = function (state, action) {
  switch (action.type) {
    case "ANIMATE_DAMAGE": {
      return {
        ...state,
        damage: action.payload,
      };
    }
  }
  switch (action.type) {
    case "TAKE_DAMAGE": {
      const updatedPlayers = [...state.players];
      const playerIndex = updatedPlayers.findIndex(
        (player) => action.id === player.playerId
      );
      const newHealth = (updatedPlayers[playerIndex].health -= action.damage);
      updatedPlayers[playerIndex].health = newHealth;

      return {
        ...state,
        players: updatedPlayers,
   
      };
    }
  }
  switch (action.type) {
    case "HIT_ME": {
      return {
        ...state,
        deck: action.updatedDeck,
        currentHand: action.newHand,
        currentHandTotal: action.newTotal
        
      };
    }
  }
  switch (action.type) {
    case "NEXT_TURN": {
      console.log("turn: " + state.turn);
      const newTurn = state.turn === 1 ? 2 : 1;
      console.log("newTurn: " + newTurn);
      return {
        ...state,
        turn: newTurn,
        currentHand: [],
        currentHandTotal: 0
      };
    }
  }
};
export default reducer;
