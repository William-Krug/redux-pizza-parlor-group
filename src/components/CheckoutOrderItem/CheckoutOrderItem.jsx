function CheckoutOrderItem({pizza}) {

  return(
    <>
      <tr>
        <td>{pizza.name}</td>
        <td>{pizza.price}</td>
      </tr>
    </>
  )
}

export default CheckoutOrderItem;