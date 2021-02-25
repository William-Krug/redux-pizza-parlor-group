/* Import needed libraries */
import { useSelector } from 'react-redux';

/* Import needed components */
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {
  /* get list of pizzas from redux store */
  const pizzaListReducer = useSelector((storeInstance) => {
    return storeInstance.pizzaListReducer;
  });

  return (
    <div>
      <h2>Step 1: Select Your Pizza(s)</h2>
      <div className="pizza-list">
        {pizzaListReducer.map((pizza) => {
          return <PizzaItem key={pizza.id} pizza={pizza} />;
        })}
      </div>
    </div>
  );
}

export default PizzaList;
