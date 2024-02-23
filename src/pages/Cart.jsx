import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import CartContext from "../context/cart/CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((p, c) => {
    return p + c.price;
  }, 0);
	

  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="bill-section">
          <h1>
            Total Amount : <br />
            <br />${total}
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
