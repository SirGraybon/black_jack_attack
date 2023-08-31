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
      console.log(action.id, action.damage)
      const updatedPlayers = [...state.players];
      const playerIndex = updatedPlayers.findIndex(
        (player) => action.id === player.playerId
      );
      updatedPlayers[playerIndex].health -= action.damage;

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
        players: action.updatedPlayers,
        deck: action.updatedDeck,
      };
    }
  }
};
export default reducer;
