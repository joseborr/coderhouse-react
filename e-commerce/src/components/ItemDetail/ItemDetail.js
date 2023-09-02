import "bulma/css/bulma.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  id,
  name,
  img,
  category,
  description,
  price,
  stock,
  brand,
}) => {
  const [quantityAdded, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);
    const item = { id, name, price, img };
    addItem(item, quantity);
  };

  return (
    <div className="card column is-half">
      <div className="card-image is-flex is-align-items-center is-justify-content-center">
        <figure className="image" style={{ width: 250 }}>
          <img src={img} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{brand}</p>
          <p className="title is-4">{name}</p>
          <p className="subtitle is-6">{category}</p>
        </div>
      </div>
      <div className="content">
        {description}
        <br />
        <h3>${price}</h3>
      </div>
      <footer>
        {quantityAdded > 0 ? (
          <Link to="/cart" className="button is-primary">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </div>
  );
};
export default ItemDetail;