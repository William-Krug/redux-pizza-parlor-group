import axios from 'axios';
import {  useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CheckoutOrderItem from '../CheckoutOrderItem/CheckoutOrderItem'
import React, { useState } from 'react';

function Checkout() {
  const history = useHistory();
  const dispatch = useDispatch();

  const orderInfo = useSelector(store => store.pizzaOrderReducer);
  const customerInfo = useSelector(store => store.customerInformation);

  let totalPrice = 0;
  
  for(let pizza of orderInfo) {
    totalPrice += Number(pizza.price);
  }

    
  const checkoutBtn = () => {
    console.log("check out Button");
    axios.post('/api/order', {
      customer_name: customerInfo.name, 
      street_address: customerInfo.street,
      city: customerInfo.city,
      zip: customerInfo.zip,      
      type: customerInfo.type, 
      total: orderInfo.price,
      time: 'nothing', 
    })
    .then((res) => {
      console.log("successful post", res);
      dispatch({
        type: 'CLEAR_REDUCERS',
        payload: []
      })//going back and clearing reducers
      history.push('/');//brings user back to page one
      alert('Order placed!');
    })
    .catch((err) => {
      console.log(err, "error")
    })
  }

  return (
    // show client input info including delivery/pickup
    // table showing order details(name & cost)
    // total price and checkout button
    // .map??
    <>
    <h1>Step 3: Checkout</h1>

    <table id="customerInformation">
      
      <thead>
        <tr>
          <td>{customerInfo[0].name}</td>
          <td>{customerInfo[0].street}</td>
          <td>{customerInfo[0].city} {customerInfo[0].zip}</td>
          
        </tr>
      </thead>
     
    </table>

    <table id="orderInformation">
      <thead>
        <tr>
          <td>Name</td>
          <td>Cost</td>
        </tr>
      </thead>
        {orderInfo.map((pizza, i) => {
          return <CheckoutOrderItem key={i} pizza={pizza} />;
        })}
      <tbody></tbody>
      <tfoot>
        <tr>
          <td></td>
          <td>TOTAL: {totalPrice.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>

    
    
    {/*
    <footer>
      <button onClick={() => checkoutBtn}>Checkout</button>
    </footer>
    */}
    </>
  )

}


export default Checkout;



//checkout button clears reducers
//  / clears their state??? set('');

//send data to server
//  /axios post(object)

