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
    value="Pickup"
    />
    <input 
    type="radio"
    value="Delivery"
    />

</>
  )
}