import React from 'react';
import CoinList from '../CoinList';
import CoinDetails from '../CoinDetails';

const App = () =>
  <div>
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="https://divxzero.github.io/crypt-keeper/">Crypt-Keeper</a>
        </div>
        <div className="navbar-right">
          <CoinDetails />
        </div>
      </div>
    </nav>
    <div className="jumbotron">
      <div className="container">
        <h1>Crypt-Keeper</h1>
        <p>Track and compare all crypto-currencies!</p>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <CoinList />
        </div>
      </div>
    </div>
  </div>

export default App;
