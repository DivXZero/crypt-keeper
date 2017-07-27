import { SET_COIN_PRICE } from '../../actions/Coin';

const initialState = 0;

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_COIN_PRICE:
      return action.price
    default:
      return state;
  }
};
