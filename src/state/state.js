const players = [
  { playerId: 1, hand: 0, health: 200 },
  { playerId: 2, hand: 0, health: 200 },
];
////
const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13,
];

export const defaultState = {
  turn: 1,
  damage: 0,
  players: players,
  deck: cards,
  currentHand: 0,
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
      const newHealth = updatedPlayers[playerIndex].health -= action.damage;
      updatedPlayers[playerIndex].health = newHealth

      return {
        ...state,
        players: updatedPlayers,
        currentHand: 0,
      };
    }
  }
  switch (action.type) {
    case "HIT_ME": {
      return {
        ...state,
        deck: action.updatedDeck,
        currentHand: action.newHand,
      };
    }
  }
  switch (action.type) {
    case "NEXT_TURN": {
      const newTurn = state.turn === 1 ? 2 : 1
      return {
        ...state,
        turn: newTurn
      };
    }
  }
};
export default reducer;
