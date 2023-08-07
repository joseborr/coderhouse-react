import Item from "../Item/Item";
import "bulma/css/bulma.css";

const ItemList = ({products}) => {
    return (
        <div className="columns is-multiline" >
            {products.map((prod) => (
        <div key={prod.id} className="column is-one-quarter">
          <Item {...prod} />
        </div>
      ))}
        </div>
    );
}
export default ItemList;