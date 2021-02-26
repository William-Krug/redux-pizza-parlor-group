// VARIABLE NAMES ARE NOT SET.
// TODO UPDATE VARIABLE NAMES TO MATCH REDUX OBJECT
import './AdminPage.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AdminPage() {

let [orderList, setOrderList] = useState([]);

useEffect(() => {
  console.log('in useEffect');
  getOrderList();
}, []);

const getOrderList = () => {
  console.log('in get orderList');

  axios.get('/api/order')
    .then((res) => {
      console.log('res.data', res.data);
      setOrderList(res.data);
    })
    .catch((err) => {
      console.log('error getting order list', err)
    })
}

console.log('orderList is', orderList);
console.log('')

  return(
  <>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Time</td>
          <td>Type</td>
          <td>Cost</td>
        </tr>
      </thead>
      <tbody>
      {orderList.map(order => {
          return
            <tr>
              <td>{order.customer_name}</td>
              <td>{order.time}</td>
              <td>{order.type}</td>
              <td>{order.total}</td>
            </tr>
          
      })}
      </tbody>
    </table>
  </>
  );
}

export default AdminPage;