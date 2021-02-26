import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux store imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaListReducer = (state = [], action) => {
  if (action.type === 'GET_PIZZA_LIST') {
    return action.payload;
  }
  return state;
}; // end pizzaListReducer

const pizzaOrderReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_ORDER':
      return [...state, action.payload];
    case 'REMOVE_FROM_ORDER':
      const pizzaIdToRemove = action.payload;
      return state.filter((pizza) => {
        return pizza.id !== pizzaIdToRemove;
      });
    default:
      return state;
  }
}; // end pizzaOrderReducer

const customerInformation = (state = [], action) => {
  console.log("payload", action.payload );
  switch (action.type) {
    case 'ADD_NEW_CUSTOMER':
      return [...state, action.payload];
    default:
      return state;
  }
} // end customerInformation

// Create store
const storeInstance = createStore(
  combineReducers({
    pizzaListReducer,
    pizzaOrderReducer,
    customerInformation,
  }),
  // Redux logger!
  applyMiddleware(logger)
); // end store

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
