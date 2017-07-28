import React from 'react';
import { connect } from 'react-redux';
import { IMG_URL } from '../../constants';
import {
  setCurrentCoin,
  getCoinPrice
} from '../../actions/Coin';

export const Coin = ({ coin, setCoin }) =>
  <div className="col-md-2">
    <div className="thumbnail">
      <img
        src={`${IMG_URL}${coin.ImageUrl}`}
        alt={coin.CoinName}
        className="media-object"
        height="128"
        width="128"
      />
      <div className="caption">
        <a onClick={setCoin(coin.Name)}>
          <h4 className="media-heading">{coin.CoinName}</h4>
        </a>
        <p>Algorithm: {coin.Algorithm}</p>
      </div>
    </div>
  </div>

const mapDispatchToProps = dispatch => ({
  setCoin(name) {
    return () => {
      dispatch(setCurrentCoin(name));
      dispatch(getCoinPrice(name));
    };
  }
});

export default connect(null, mapDispatchToProps)(Coin);
