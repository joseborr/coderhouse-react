import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import TableRow from "../TableRow/TableRow";
const Cart = () =>{
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
    if(totalQuantity() === 0) {
        return(
        <div>
            <div class="notification is-danger">No hay elementos en el carrito</div>
            <Link to="/" className="button is-primary">Productos</Link>
        </div>)
    }
    return(
        <div >
            <div className="is-flex is-align-item-center is-justify-content-center">
            <table className="table is-hoverable">
            <tr>
                    <th>#</th>
                    <th>&nbsp;</th>
                    <th>Nombre del producto</th>
                    <th>Precio Unitario</th>
                    <th>Cantidad</th>
                    <th>Monto</th>
                    <th>&nbsp;</th>
                </tr>
            {cart.map((p,index) => <TableRow key={p.id} {...p} index={index}/>)}
            </table>
            </div>
            <h3>Total: ${total()}</h3>
            <button onClick={()=> clearCart()} className="button is-danger m-2">Limpiar carrito</button>
            <Link to="/checkout" className="button is-primary m-2">Checkout</Link>
        </div>
    );
}

export default Cart;