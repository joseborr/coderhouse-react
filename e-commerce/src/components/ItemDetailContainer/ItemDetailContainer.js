import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "bulma/css/bulma.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { itemId } = useParams();
  const docRef = doc(db, "products", itemId);
  useEffect(() => {
    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div className="columns is-flex is-justify-content-center m-5">
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemDetailContainer;
