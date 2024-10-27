interface Props {
  cartItems: string[];
}

const Cart = ({ cartItems }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
