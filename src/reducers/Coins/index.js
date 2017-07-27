import { SET_COINS } from '../../actions/Coins'

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_COINS:
      return action.coins;
    default:
      return state;
  }
}
