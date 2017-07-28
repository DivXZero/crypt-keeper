import React from 'react';
import { connect } from 'react-redux';
import Coin from '../Coin';

const CoinList = ({ coins }) =>
  <div className="row">
    {Object.values(coins).map((coin) =>
      <Coin key={coin.Id} coin={coin} />
    )}
  </div>

const mapStateToProps = ({ coins }) => ({
  coins
});

export default connect(mapStateToProps)(CoinList);
