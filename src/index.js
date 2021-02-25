import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux store imports
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

const pizzaListReducer = (state =[], action) => {
  if (action.type === 'GET_PIZZA_LIST') {
    return action.payload
  }
  return state
} // end pizzaListReducer

// Create store
const storeInstance = createStore(
  combineReducers({
    pizzaListReducer
  })
); // end store

ReactDOM.render(
<Provider store={storeInstance}>
  <App />
</Provider>, 
document.getElementById('root'));

