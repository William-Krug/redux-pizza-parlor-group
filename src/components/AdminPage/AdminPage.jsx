// VARIABLE NAMES ARE NOT SET.
// TODO UPDATE VARIABLE NAMES TO MATCH REDUX OBJECT

import { useSelector} from 'react-redux';

function AdminPage() {
  const orderList = useSelector(store => store.orderList); // place holder variables
  return(
  <>
    <table>
      <thead>
        <tr>Name</tr>
        <tr>Time Order Placer</tr>
        <tr>Type</tr>
        <tr>Cost</tr>
      </thead>
        <tbody>
          {/*
          {orderList.map(order => {
            return
              <tr>
           
                <td>{order.name}</td>
                <td>{order.time}</td>
                <td>{order.type}</td>
                <td>{order.cost}</td>
          
              </tr>
          */}
          })}
        </tbody>
    </table>
  </>
  );
}

export default AdminPage;