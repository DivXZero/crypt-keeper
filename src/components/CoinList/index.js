import React from 'react';
import { connect } from 'react-redux';

const CoinList = ({ coins }) =>
  <div>
    {Object.values(coins).map((coin) =>
      <div className="col-md-1">
        <img src={'https://www.cryptocompare.com/' + coin.ImageUrl} height="100" width="100" alt={coin.CoinName} />
      </div>
    )}
  </div>

const mapStateToProps = ({ coins }) => ({
  coins
});

export default connect(mapStateToProps)(CoinList);
