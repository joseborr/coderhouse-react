import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "bulma/css/bulma.css";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductById(itemId)
        .then((response) => {
            setProduct(...response);
            
        })
        .catch((error) => console.error(error));
    },[itemId]);


  return <div className="columns is-flex is-justify-content-center m-5">
    <ItemDetail {...product}/>
  </div>;
};
export default ItemDetailContainer;
