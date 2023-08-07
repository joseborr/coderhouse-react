import "bulma/css/bulma.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, img, category, description, price, stock, brand }) => {
  return (
    <div className="card column is-half">
      <div className="card-image is-flex is-align-items-center is-justify-content-center">
        <figure className="image" style={{width: 250}}>
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
        <br/><h3>${price}</h3>
      </div>
      <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}/>
    </div>
  );
};
export default ItemDetail;