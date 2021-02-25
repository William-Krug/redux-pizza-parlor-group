import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux store imports
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

// Create store
const storeInstance = createStore(
  combineReducers({

  })
);

ReactDOM.render(
<Provider store={storeInstance}>
  <App />
</Provider>, 
document.getElementById('root'));

