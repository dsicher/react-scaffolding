// React
import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

// App Entry Component
import HelloWorld from './HelloWorld';

// Redux Implementation
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const combinedReducers = combineReducers(reducers);
const store = createStoreWithMiddleware(combinedReducers);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id={`root`}>
          <HelloWorld.Component />
        </div>
      </Provider>
    )
  }
}
