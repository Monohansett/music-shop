import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './App';
import reducer from './reducers'

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

export default function configureStore() {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
  
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index');
        store.replaceReducer(nextRootReducer);
      });
    }
  
    return store;
  }


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))

// module.hot.accept();


