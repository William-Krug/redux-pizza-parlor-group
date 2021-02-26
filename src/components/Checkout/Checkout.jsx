import axios from 'axios';


const Checkout = () => {
  axios.post('/api/pizza')
  .then((res) => {
    console.log("POST ", res);

  })
  .catch((err) => {
    console.log(err, "error")
  })

  return (
    // show client input info including delivery/pickup
    //table showing order details(name & cost)
    // total price and checkout button
    // .map??
    <>
    <h1>Step 3: Checkout</h1>
    <table>
      
    </table>
    </>
  )

}


export default Checkout



///checkout button clears 
//send data to server
//