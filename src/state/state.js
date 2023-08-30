


export const defaultState = {
  turn: 1,
  damage: false,

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