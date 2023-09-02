const TableRow = ({img, name, price, quantity,index}) =>{
    return <tr>
        <td>{index + 1}</td>
        <td><img src={img} style={{maxHeight:40 + 'px'}}/></td>
        <td>{name}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>${quantity * price}</td>
    </tr>
}
export default TableRow;