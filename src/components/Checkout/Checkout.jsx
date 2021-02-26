///Done by Michael
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
    <h1>Step 3: Checkout</h1>
  )

}


export default Checkout