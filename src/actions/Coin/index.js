import {
  API_URL,
  IMG_URL,
  PRICE_API_URL
} from '../../constants';

export const SET_CURRENT_COIN = 'SET_CURRENT_COIN';
export const SET_COIN_PRICE = 'SET_COIN_PRICE';

export function setCurrentCoin(name) {
  return {
    type: SET_CURRENT_COIN,
    name
  };
}

export function setCoinPrice(price) {
  return {
    type: SET_COIN_PRICE,
    price
  };
}

export function getCoinPrice(name) {
  return dispatch =>
    fetch(`${PRICE_API_URL}/price?fsym=${name}&tsyms=USD`)
      .then(res => res.json())
      .then(price =>
        dispatch(setCoinPrice(price.USD))
      );
}
