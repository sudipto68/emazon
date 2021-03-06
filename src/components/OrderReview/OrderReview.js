import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart } from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const keys = Object.keys(savedCart);
    const cartProducts = keys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Total Cart Items: {cart.length}</h2>
      {cart.map((product) => (
        <ReviewItem product={product} />
      ))}
    </div>
  );
};

export default OrderReview;
