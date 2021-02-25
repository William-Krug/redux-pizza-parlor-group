import axios from 'axios';
import './App.css';
import AdminPage from '../AdminPage/AdminPage'
import Header from '../Header/Header'
import React, { useState, useEffect } from 'react';


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
      <Header />
    </div>
  );
}

export default App;
