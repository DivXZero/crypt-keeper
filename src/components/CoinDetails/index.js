import React from 'react';
import { connect } from 'react-redux';

const CoinDetails = ({ coin }) =>
  <div>Current Coin: {coin.name}, Price: {coin.price}</div>;

const mapStateToProps = ({ coin }) => ({
  coin,
});

export default connect(mapStateToProps)(CoinDetails);
