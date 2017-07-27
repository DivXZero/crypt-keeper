import React from 'react';
import { connect } from 'react-redux';
import { IMG_URL } from '../../constants';
import {
  setCurrentCoin,
  getCoinPrice
} from '../../actions/Coin';

const CoinList = ({ coins, setCoin }) =>
  <ul className="media-list">
    {Object.values(coins).map((coin) =>
      <li
        key={coin.Id}
        onClick={setCoin(coin.Name)}
        className="media"
      >
        <div className="media-left">
          <img
            src={`${IMG_URL}${coin.ImageUrl}`}
            alt={coin.CoinName}
            className="media-object"
            height="64"
            width="64"
          />
        </div>
        <div className="media-body">
          <h4 className="media-heading">{coin.CoinName}</h4>
          <p>Algorithm: {coin.Algorithm}</p>
        </div>
      </li>
    )}
  </ul>

const mapStateToProps = ({ coins }) => ({
  coins
});

const mapDispatchToProps = dispatch => ({
  setCoin(name) {
    return () => {
      dispatch(setCurrentCoin(name));
      dispatch(getCoinPrice(name));
    };
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
