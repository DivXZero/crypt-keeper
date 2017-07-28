import React from 'react';
import CoinList from '../CoinList';
import CoinDetails from '../CoinDetails';

const App = () =>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <CoinDetails />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <CoinList />
      </div>
    </div>
  </div>

export default App;
