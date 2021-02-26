/* Import needed libraries */
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

/* Import needed components */
import PizzaItem from '../PizzaItem/PizzaItem';

/**
 * Function renders a list of all pizza objects in the
 * Redux store.
 *
 * Each pizza object looks like:
 * {
 *  id:
 *  name:
 *  description:
 *  price:
 *  image_path:
 * }
 */
function PizzaList() {
  const history = useHistory();

  /* get list of pizzas from redux store */
  const pizzaList = useSelector((storeInstance) => {
    return storeInstance.pizzaListReducer;
  });

  return (
    <div className="pizz-list-container">
      <h2>Step 1: Select Your Pizza(s)</h2>
      <div className="pizza-list">
        {pizzaList.map((pizza) => {
          return <PizzaItem key={pizza.id} pizza={pizza} />;
        })}
      </div>
      <div className="button">
        <button
          className="next-button"
          onClick={() => {
            history.push('/customerInfo');
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default PizzaList;
