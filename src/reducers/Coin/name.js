import { SET_CURRENT_COIN } from '../../actions/Coin';

const initialState = '';

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_COIN:
      return action.name
    default:
      return state;
  }
};
