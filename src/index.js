import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
// import logger from 'redux-logger';

import history from './history';
import App from './containers/App';
import storeApp from './reducers';
import initReactFastclick from 'react-fastclick';

initReactFastclick();

export const store = createStore(storeApp,
  compose(
    applyMiddleware(
      // logger,
      thunk,
      routerMiddleware(history),
    ) 
  )
);

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>
  , document.getElementById('root'));
// registerServiceWorker();
