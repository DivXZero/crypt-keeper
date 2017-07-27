import React from 'react';
import { connect } from 'react-redux';
import { IMG_URL } from '../../constants';

const CoinList = ({ coins }) =>
  <div>
    {Object.values(coins).map((coin) =>
      <div key={coin.Id} className="media">
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
      </div>
    )}
  </div>

const mapStateToProps = ({ coins }) => ({
  coins
});

export default connect(mapStateToProps)(CoinList);
