import { useSelector } from 'react-redux';


function Header() {

  const orderList = useSelector((store) => {
      return store.pizzaOrderReducer;
  })

  let totalCost = 0;

  for (let i = 0; i < orderList.length; i++) {
    let currentItem = orderList[i];
    totalCost += Number(currentItem.price); 
  }

  console.log('totalCost: ', totalCost);

  return (
    <header className='App-header'>
      <h1 className='App-title'>Prime Pizza</h1>
      <div>est. 2021 <span>Total: {totalCost}</span></div>
      

      
    </header>
  )
}

export default Header;
