import axios from 'axios';
import './App.css';
import AdminPage from '../AdminPage/AdminPage'
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';



function App() {

  useEffect(() => {
    console.log('in useEffect');
    getPizzaList();
  }, []);

  const getPizzaList = () => {
    axios.get('/api/pizza')
      .then((res) => {
        console.log('Successful GET', res);
        dispatch({
          type: 'GET_PIZZA_LIST',
          payload: res.data
        })
      })
      .catch((err) => {
        console.log('Error in GET');
      })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

    <Router>
      <Route path="/home">
        <PizzaList />
      </Route>
      <Route path="/customerInfo">

      </Route>
      <Route path="/checkout">

      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
    </Router>
  
    </div>
  );
}

export default App;
