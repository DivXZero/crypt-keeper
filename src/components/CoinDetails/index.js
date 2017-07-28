import React from 'react';
import { connect } from 'react-redux';

const CoinDetails = ({ coin }) =>
  <div className="navbar-text">
    Current Coin: <span className="badge badge-warning">{coin.name}</span>
    {' '}
    Price(USD): <span className="badge badge-success">{coin.price}</span>
  </div>;

const mapStateToProps = ({ coin }) => ({
  coin,
});

export default connect(mapStateToProps)(CoinDetails);
