/////////////////IMPORTs///////////////////////////////////////////////////////////////////////////
import AHeart from "../assets/cards/AHeart.png";
import twoHeart from "../assets/cards/2Heart.png";
import threeHeart from "../assets/cards/3Heart.png";
import fourHeart from "../assets/cards/4Heart.png";
import fiveHeart from "../assets/cards/5Heart.png";
import sixHeart from "../assets/cards/6Heart.png";
import sevenHeart from "../assets/cards/7Heart.png";
import eightHeart from "../assets/cards/8Heart.png";
import nineHeart from "../assets/cards/9Heart.png";
import tenHeart from "../assets/cards/10Heart.png";
import JHeart from "../assets/cards/JHeart.png";
import QHeart from "../assets/cards/QHeart.png";
import KHeart from "../assets/cards/KHeart.png";

import king from "../assets/cards/King.png"
import kingDamage from "../assets/cards/KingDamage.png"
import Queen from "../assets/cards/Queen.png"
import QueenDamage from "../assets/cards/QueenDamage.png"

const players = [
  { playerId: 1, hand: 0, health: 175, avatar: Queen, hurt: QueenDamage },
  { playerId: 2, hand: 0, health: 175, avatar: king, hurt: kingDamage },
];
////
const cards = [
  { value: 1, image: AHeart },
  { value: 2, image: twoHeart },
  { value: 3, image: threeHeart },
  { value: 4, image: fourHeart },
  { value: 5, image: fiveHeart },
  { value: 6, image: sixHeart },
  { value: 7, image: sevenHeart },
  { value: 8, image: eightHeart },
  { value: 9, image: nineHeart },
  { value: 10, image: tenHeart },
  { value: 11, image: JHeart },
  { value: 12, image: QHeart },
  { value: 13, image: KHeart },
  { value: 1, image: AHeart },
  { value: 2, image: twoHeart },
  { value: 3, image: threeHeart },
  { value: 4, image: fourHeart },
  { value: 5, image: fiveHeart },
  { value: 6, image: sixHeart },
  { value: 7, image: sevenHeart },
  { value: 8, image: eightHeart },
  { value: 9, image: nineHeart },
  { value: 10, image: tenHeart },
  { value: 11, image: JHeart },
  { value: 12, image: QHeart },
  { value: 13, image: KHeart },
  { value: 1, image: AHeart },
  { value: 2, image: twoHeart },
  { value: 3, image: threeHeart },
  { value: 4, image: fourHeart },
  { value: 5, image: fiveHeart },
  { value: 6, image: sixHeart },
  { value: 7, image: sevenHeart },
  { value: 8, image: eightHeart },
  { value: 9, image: nineHeart },
  { value: 10, image: tenHeart },
  { value: 11, image: JHeart },
  { value: 12, image: QHeart },
  { value: 13, image: KHeart },
  { value: 1, image: AHeart },
  { value: 2, image: twoHeart },
  { value: 3, image: threeHeart },
  { value: 4, image: fourHeart },
  { value: 5, image: fiveHeart },
  { value: 6, image: sixHeart },
  { value: 7, image: sevenHeart },
  { value: 8, image: eightHeart },
  { value: 9, image: nineHeart },
  { value: 10, image: tenHeart },
  { value: 11, image: JHeart },
  { value: 12, image: QHeart },
  { value: 13, image: KHeart },
];

export const defaultState = {
  turn: 1,
  damage: 0,
  players: players,
  deck: cards,
  topCard: { value: 1, image: AHeart },
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
        currentHandTotal: action.newTotal,
        topCard: action.drawnCard
        
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
