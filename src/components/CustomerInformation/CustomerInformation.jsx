function CustomerInformation() {

  return(
    
    //pull in Header component with total price


    <>
    <h2>Step 2: Customer Information</h2>

    <input 
    type="text"
    placeholder="Name"
    />
    <input 
    type="text"
    placeholder="Street Address"
    /> <input 
    type="text"
    placeholder="City"
    /> <input 
    type="text"
    placeholder="Zip"
    />
    <input 
    type="radio"
    id="Pickup"
    name="Pickup"
    value="Pickup"
    />
    <label for="Pickup">Pickup</label><br>

    <input 
    type="radio"
    id="Delivery"
    name="Pickup"
    value="Delivery"
    />
    <label for="Delivery">Delivery</label>

</>
  )
}