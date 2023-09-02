import { useContext } from "react";
import cart from "./assets/cart.svg";
import "bulma/css/bulma.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext);
    return (
      <div>
        <Link to="/cart">
          <button className="button is-primary is-relative mr-5">
            <img src={cart} alt="cart-widget" />
            <span className="is-absolute is-top is-right mt-0 ml-auto is-flex is-align-items-center tag is-danger is-rounded">
              {totalQuantity()}
            </span>
          </button>
        </Link>
      </div>
    );
}

export default CartWidget;