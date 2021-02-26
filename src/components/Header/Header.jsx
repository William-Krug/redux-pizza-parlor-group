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
      <p>estd. 2021</p>
      <div>Total: {totalCost}</div>
    </header>
  )
}

export default Header;

// pushing to master