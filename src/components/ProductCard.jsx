import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const handleAdd = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
      <span>
        <h3>Price : {product.price}</h3>
        <button className="add_cart" onClick={() => handleAdd(product)}>
          Add to cart
        </button>
      </span>
    </div>
  );
};

export default ProductCard;
