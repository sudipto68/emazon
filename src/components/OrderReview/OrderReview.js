import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../../components/Cart/Cart";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  clearLocalShoppingCart,
} from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Link } from "react-router-dom";

const OrderReview = () => {
  const [cart, setCart] = useState([]);
  const [order, setOder] = useState(false);
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

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Please select Items to order");
    } else {
      setCart([]);
      setOder(true);
      clearLocalShoppingCart();
    }
  };
  const removeItem = (productkey) => {
    const newCart = cart.filter((pd) => pd.key !== productkey);
    setCart(newCart);
    removeFromDatabaseCart(productkey);
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "70%", borderRight: "1px solid lightgray" }}>
        <h2 style={{ textAlign: "center" }}>Total Cart Items: {cart.length}</h2>
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            removeItem={removeItem}
          />
        ))}
        {order && (
          <h2 style={{ textAlign: "center", color: "orangered" }}>
            Thank You For Your Order!!
            <br /> Your order Has been Successful Placed!
          </h2>
        )}
      </div>
      <div style={{ marginLeft: "30px" }}>
        <Cart cart={cart}>
          <Link to="/review">
            <button style={{ width: "200px" }} onClick={placeOrder}>
              Place Your Order
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
