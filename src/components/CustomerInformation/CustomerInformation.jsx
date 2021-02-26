import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function CustomerInformation() {
  const history = useHistory();
  const dispatch = useDispatch();

  let [customerToAdd, setCustomerToAdd] = useState({ name: '', street: '', city: '', zip: 0, type: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // TODO: Dispatch here, instead of using addNewProduct from parent DONE
    dispatch({
      type: 'ADD_NEW_CUSTOMER',
      payload: customerToAdd
    })

    // TODO: Clear input fields DONE
    setCustomerToAdd({ name: '', street: '', city: '', zip: 0, type:'' });
    history.push('/checkout');
  }

  const handleName = (event) => {
    setCustomerToAdd({
      ...customerToAdd,
      name: event.target.value,
    });
  }
  const handleStreet = (event) => {
    setCustomerToAdd({
      ...customerToAdd,
      street: event.target.value,
    });
  }  
  const handleCity = (event) => {
    setCustomerToAdd({
      ...customerToAdd,
      city: event.target.value,
    });
  }

  const handleZip = (event) => {
    setCustomerToAdd({
      ...customerToAdd,
      zip: event.target.value,
    });
  }

  const handleType = (event) => {
    console.log('Type Change', event.target.value);
    setCustomerToAdd({
      ...customerToAdd,
      type: event.target.value,
    });
  }


  return (
    
    //pull in Header component with total price

    //TODO grab inputs 
    // Put in local state
    // Dispatch to customerInformation Reducer

    <>
    <h2>Step 2: Customer Information</h2>
    <form onSubmit={handleSubmit}>
    <input 
      type="text"
      placeholder="Name"
      onChange={handleName}
      value={customerToAdd.name}
    />
    <input 
      type="text"
      placeholder="Street Address"
      onChange={handleStreet}
      value={customerToAdd.street}
    /> 
    <input 
      type="text"
      placeholder="City"
      onChange={handleCity}
      value={customerToAdd.city}
    /> 
    <input 
      type="number"
      placeholder="Zip"
      onChange={handleZip}
      value={customerToAdd.zip}
    />
    <input 
      type="radio"
      id="Pickup"
      name="orderType"
      value="Pickup"
      onChange={handleType}
    />
  
    <label htmlFor="Pickup">Pickup</label>

    <input 
      type="radio"
      id="Delivery"
      name="orderType"
      value="Delivery"
      onChange={handleType}
    />
    <label htmlFor="Delivery">Delivery</label>

    <input type="submit" value="Next" ></input>
    </form>

  </>
  )
}

export default CustomerInformation;