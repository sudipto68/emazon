import React from "react";

const ReviewItem = (props) => {
  const { name, quantity, img } = props.product;
  const divStyle = {
    margin: "10px",
    padding: "10px",
    borderBottom: "1px solid lightgray",
  };
  return (
    <div style={divStyle}>
      <img src={img} alt="productImg" />
      <h4>{name}</h4>
      <p>Quantity: {quantity}</p>
      <button>Remove Item</button>
    </div>
  );
};

export default ReviewItem;
