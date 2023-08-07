import { useState } from "react";
import "bulma/css/bulma.css";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => (quantity < stock) && setQuantity(quantity + 1);
    

    const decrement = () => (quantity > 1) && setQuantity(quantity - 1);

    return (
        <div className="is-flex-wrap-wrap">
            <div className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center m-4">
                <button className="button is-primary" onClick={decrement}>-</button>
                <h4 className="mx-2">{quantity}</h4>
                <button className="button is-primary" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button is-primary" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    );
}

export default ItemCount;