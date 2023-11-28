import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import {
  decrease,
  increase,
  removeItem,
} from "../features/cart/cart";

const CartItem = ({ title, price, amount, img, id }) => {
  const dispatch = useDispatch();

  const decreaseHandle = () => {
    if (amount > 1) dispatch(decrease({ id }));
    else dispatch(removeItem({ id, amount }));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() =>
            dispatch(removeItem({ id, amount }))
          }
        >
          remove
        </button>
      </div>

      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increase({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={decreaseHandle}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
