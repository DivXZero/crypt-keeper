import { API_URL } from '../../constants';

export const SET_COINS = 'SET_COINS';

export function getCoins() {
  return dispatch => {
    fetch(`${API_URL}/data/coinlist`)
      .then(res => res.json())
      .then(res => res["Data"])
      .then(coins =>
        dispatch(setCoins(coins))
      );
  };
}

export function setCoins(coins) {
  return {
    type: SET_COINS,
    coins
  };
}
