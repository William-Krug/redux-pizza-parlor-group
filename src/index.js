import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux store imports
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

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
      return state.filter((pizza) => {
        pizza.id !== action.payload;
      });
    default:
      return state;
  }
}; // end pizzaOrderReducer

// Create store
const storeInstance = createStore(
  combineReducers({
    pizzaListReducer,
  })
); // end store

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
