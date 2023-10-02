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

import king from "../assets/cards/King.png";
import kingDamage from "../assets/cards/KingDamage.png";
import Queen from "../assets/cards/Queen.png";
import QueenDamage from "../assets/cards/QueenDamage.png";

const playerList = [
  {
    playerId: 1,
    hand: 0,
    health: 175,
    wins: 0,
    avatar: Queen,
    hurt: QueenDamage,
  },
  {
    playerId: 2,
    hand: 0,
    health: 175,
    wins: 0,
    avatar: king,
    hurt: kingDamage,
  },
];
////
const cards = [
  { value: 1, image: AHeart, id: 1 },
  { value: 2, image: twoHeart, id: 2 },
  { value: 3, image: threeHeart, id: 3 },
  { value: 4, image: fourHeart, id: 4 },
  { value: 5, image: fiveHeart, id: 5 },
  { value: 6, image: sixHeart, id: 6 },
  { value: 7, image: sevenHeart, id: 7 },
  { value: 8, image: eightHeart, id: 8 },
  { value: 9, image: nineHeart, id: 9 },
  { value: 10, image: tenHeart, id: 10 },
  { value: 11, image: JHeart, id: 11 },
  { value: 12, image: QHeart, id: 12 },
  { value: 13, image: KHeart, id: 13 },
  { value: 1, image: AHeart, id: 14 },
  { value: 2, image: twoHeart, id: 15 },
  { value: 3, image: threeHeart, id: 16 },
  { value: 4, image: fourHeart, id: 17 },
  { value: 5, image: fiveHeart, id: 18 },
  { value: 6, image: sixHeart, id: 19 },
  { value: 7, image: sevenHeart, id: 20 },
  { value: 8, image: eightHeart, id: 21 },
  { value: 9, image: nineHeart, id: 22 },
  { value: 10, image: tenHeart, id: 23 },
  { value: 11, image: JHeart, id: 24 },
  { value: 12, image: QHeart, id: 25 },
  { value: 13, image: KHeart, id: 26 },
  { value: 1, image: AHeart, id: 27 },
  { value: 2, image: twoHeart, id: 28 },
  { value: 3, image: threeHeart, id: 29 },
  { value: 4, image: fourHeart, id: 30 },
  { value: 5, image: fiveHeart, id: 31 },
  { value: 6, image: sixHeart, id: 32 },
  { value: 7, image: sevenHeart, id: 33 },
  { value: 8, image: eightHeart, id: 34 },
  { value: 9, image: nineHeart, id: 35 },
  { value: 10, image: tenHeart, id: 36 },
  { value: 11, image: JHeart, id: 37 },
  { value: 12, image: QHeart, id: 38 },
  { value: 13, image: KHeart, id: 39 },
  { value: 1, image: AHeart, id: 40 },
  { value: 2, image: twoHeart, id: 41 },
  { value: 3, image: threeHeart, id: 42 },
  { value: 4, image: fourHeart, id: 43 },
  { value: 5, image: fiveHeart, id: 44 },
  { value: 6, image: sixHeart, id: 45 },
  { value: 7, image: sevenHeart, id: 46 },
  { value: 8, image: eightHeart, id: 47 },
  { value: 9, image: nineHeart, id: 48 },
  { value: 10, image: tenHeart, id: 49 },
  { value: 11, image: JHeart, id: 50 },
  { value: 12, image: QHeart, id: 51 },
  { value: 13, image: KHeart, id: 52 },
];


export const initialState = {
  turn: 1,
  damage: 0,
  players: JSON.parse(JSON.stringify(playerList)),
  deck: [...cards],
  currentHand: [],
  currentHandTotal: 0,
  burnPile: [],
  gameOverModal: false
};

const defaultState = {
  turn: 1,
  damage: 0,
  players: JSON.parse(JSON.stringify(playerList)),
  deck: [...cards],
  currentHand: [],
  currentHandTotal: 0,
  burnPile: [],
  gameOverModal: false
};

////////////////////REDUCER SWITCH CASEs////////////////////////////////////////////////////////////
export const reducer = function (state, action) {
  console.log(playerList)
  switch (action.type) {
    case "ANIMATE_DAMAGE": {
      return {
        ...state,
        damage: action.payload,
      };
    }

    case "TAKE_DAMAGE": {
      return {
        ...state,
        players: action.updatedPlayers,
      };
    }

    case "HIT_ME": {
      console.log(action.newTotal);
      return {
        ...state,
        deck: action.updatedDeck,
        currentHand: action.newHand,
        currentHandTotal: action.newTotal,
        // topCard: action.drawnCard,
      };
    }

    case "NEXT_TURN": {
      const prevBurnPile = [...state.burnPile]
      const prevHand = [...state.currentHand]
      prevHand.forEach((card) => {
        prevBurnPile.push(card)
      })
      const gameOver = state.players[0].health < 1 || state.players[1].health < 1

      const newTurn = state.turn === 1 ? 2 : 1;

      return {
        ...state,
        turn: newTurn,
        currentHand: [],
        currentHandTotal: 0,
        burnPile: prevBurnPile,
        gameOverModal: gameOver
      };
    }
    case "RESET": {
      const newGame = {...defaultState}
      return newGame
      ;
    }
    case "TOGGLE_MODAL": {
      console.log("howdy")
      const currentState = {...state}
      const toggle = currentState.gameOverModal === true ? false : true

      return {
        ...state,
        gameOverModal: toggle
      };
    }
  }
};
export default reducer;
