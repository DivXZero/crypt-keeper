import { combineReducers } from 'redux';
import name from './name';
import price from './price';

export default combineReducers({
  name,
  price
});
