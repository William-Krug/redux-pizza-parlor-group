import axios from 'axios';
import './App.css';

import AdminPage from '../AdminPage/AdminPage'
import Header from '../Header/Header'

import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PizzaList from '../PizzaList/PizzaList';

function App() {
  useEffect(() => {
    console.log('in useEffect');
    getPizzaList();
  }, []);

  const dispatch = useDispatch();

  const getPizzaList = () => {
    axios
      .get('/api/pizza')
      .then((res) => {
        console.log('Successful AXIOS GET', res);
        dispatch({
          type: 'GET_PIZZA_LIST',
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log('Error in AXIOS GET');
      });
  };



  return (

    <div className='App'>

      <Header />

    <Router>
      <Route exact path="/">
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
