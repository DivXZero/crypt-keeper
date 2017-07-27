import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { getCoins } from './actions/Coins';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.dispatch(getCoins());

require('./index.html');
const container = document.getElementById('react-root');

const appRender = (
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>
);

ReactDOM.render(
  appRender,
  container
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      appRender,
      container
    )
  });
}
