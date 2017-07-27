import React from 'react';
import CoinList from '../CoinList';
import CoinDetails from '../CoinDetails';

const App = () =>
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <CoinList />
      </div>
      <div className="col-md-6">
        <CoinDetails />
      </div>
    </div>
  </div>

export default App;
