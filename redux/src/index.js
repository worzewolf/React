import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'

// function loggerMiddleware(store) {
//   return function(next) {
//     return function(action) {
//       const result = next(action)

//       console.log('Middleware', store.getState);
//       return result
//     }
//   }
// }


const composeEnchancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTESION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTESION_COMPOSE__ ({
      // Specify extension's options like name, actionsBlacklist, actionsCreators
    }) : compose;

const loggerMiddleware = store => next => action => {
  const result = next(action)
      console.log('Middleware', store.getState());
      return result
}

const store = createStore(rootReducer, composeEnchancers(applyMiddleware(loggerMiddleware, reduxThunk)))

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
