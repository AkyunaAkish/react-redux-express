import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';

import promise from 'redux-promise';
import logger from 'redux-logger';

import reducers from './reducers/index.js';
import routes from './routes.js';

const createStoreWithMiddleware = applyMiddleware(promise, logger())(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  , document.querySelector('#app'));
