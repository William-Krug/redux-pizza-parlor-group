// VARIABLE NAMES ARE NOT SET.
// TODO UPDATE VARIABLE NAMES TO MATCH REDUX OBJECT
import './AdminPage.css'

import { useSelector} from 'react-redux';

function AdminPage() {
  const orderList = useSelector(store => store.orderList); // place holder variables
  return(
  <>
    <table>
    
      <tr>
        <th>Name</th>
        <th>Time Order Placed</th>
        <th>Type</th>
        <th>Cost</th>
      </tr>
      <tbody>
          <tr>
            <td>Johnny B</td>
            <td>11:15am</td>
            <td>Delivery</td>
            <td>12.99</td>
          </tr>
          <tr>
            <td>Johnny B</td>
            <td>11:15am</td>
            <td>Delivery</td>
            <td>12.99</td>
          </tr>
          <tr>
            <td>Johnny B</td>
            <td>11:15am</td>
            <td>Delivery</td>
            <td>12.99</td>
          </tr>
          <tr>
            <td>Johnny B</td>
            <td>11:15am</td>
            <td>Delivery</td>
            <td>12.99</td>
          </tr>
          {/*
          {orderList.map(order => {
            return
              <tr>
                <td>{order.name}</td>
                <td>{order.time}</td>
                <td>{order.type}</td>
                <td>{order.cost}</td>
              </tr>
          
          })}
          */}  
      </tbody>
    </table>
  </>
  );
}

export default AdminPage;