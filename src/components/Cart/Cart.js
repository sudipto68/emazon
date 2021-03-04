import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  const price = Math.round(
    cart.reduce((sum, product) => sum + product.price, 0)
  );
  let shipping = 0;
  if (price === 0) {
    shipping = 0;
  } else if (price > 20) {
    shipping = 0;
  } else {
    shipping = 5;
  }
  let tax = Math.round(price * 0.1);
  const totalPrice = Math.round(price + shipping + tax);
  return (
    <div className="cart">
      <div style={{ textAlign: "center" }}>
        <h3>Order Summary</h3>
        <p>Items Ordered: {cart.length}</p>
      </div>
      <br />
      <p>Product Price: ${price}</p>
      <p>Shipping Cost: ${shipping}</p>
      <p>
        <small style={{ color: "red" }}>
          [Order minimum 20$ to get free shipping]
        </small>
      </p>
      <p>Tax: ${tax}</p>
      <h3 style={{ color: "orangered" }}>Order Total: ${totalPrice}</h3>
      <button style={{ width: "200px" }}>Review Your Order</button>
    </div>
  );
};

export default Cart;
