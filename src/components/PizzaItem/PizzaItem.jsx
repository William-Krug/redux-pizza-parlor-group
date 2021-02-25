/* Import needed libraries */
import { useSelector, useDispatch } from 'react-redux';

/* Import css */
import './PizzaItem.css';

function PizzaItem({ pizza }) {
  const dispatch = useDispatch();
  /* function for button conditional rendering */
  const buttonSwap = () => {};

  /* handle ADD */

  /* handle REMOVE */

  return (
    <div className="pizza-item">
      <img
        src={pizza.image_path}
        alt={pizza.description}
        width="200"
        height="200"
      />
      <div className="pizza-description">
        <h3>{pizza.name}</h3>
        <p>{pizza.description}</p>
        <p className="pizza-price">${pizza.price}</p>
      </div>
      <div onClick={buttonSwap}>Add/Remove</div>
    </div>
  );
}

export default PizzaItem;
