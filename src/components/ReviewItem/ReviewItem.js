import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, img, key, price } = props.product;
  const removeItem = props.removeItem;
  const divStyle = {
    margin: "10px",
    padding: "10px",
    borderBottom: "1px solid lightgray",
  };
  return (
    <div style={divStyle}>
      <img src={img} alt="productImg" />
      <h4>{name}</h4>
      <p>Price: {price}$</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => removeItem(key)}>Remove Item</button>
    </div>
  );
};

export default ReviewItem;
