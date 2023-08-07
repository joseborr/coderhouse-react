import "bulma/css/bulma.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, brand }) => {
  return (
    <div className="card m-5">
      <div className="card-image">
        <figure className="image">
          <img src={img} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{brand}</p>
        <p className="title is-4">{name}</p>
        <h4>${price}</h4>
      </div>
      <footer>
        <Link to={`/item/${id}`} className="option button is-primary m-2">
          Ver Detalle
        </Link>
      </footer>
    </div>
  );
};
export default Item;
