const players = [
  { playerId: 1, hand: 0 },
  { playerId: 2, hand: 0 },
];
////
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13, 1,2,3,4,5,6,7,8,9,10,11,12,13, 1,2,3,4,5,6,7,8,9,10,11,12,13, 1,2,3,4,5,6,7,8,9,10,11,12,13]

export const defaultState = {
  turn: 1,
  damage: false,
  players: players,
  deck: cards,

}
////////////////////REDUCER SWITCH CASEs////////////////////////////////////////////////////////////
export const reducer = function(state, action){

  switch (action.type){
    case "TAKE_DAMAGE": {
      return {
        ...state,
        damage: action.payload
      }
    }
  }

}
export default reducer;