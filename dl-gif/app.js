import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';
import MyComponent from './containers/example';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const App = () => (
  <MyComponent />
);

render(ReduxApp(), document.getElementById('root'));
