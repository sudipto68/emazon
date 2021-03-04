import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, img, seller, stock } = props.product;
  const addProducts = props.addProducts;
  return (
    <div className="product">
      <div>
        <img src={img} alt="productImage" />
      </div>
      <div className="productDetails">
        <h4 className="productName">{name}</h4>
        <p>by: {seller}</p>
        <h5>${price}</h5>
        <p>Only {stock} left in stock - order soon</p>
        <button onClick={() => addProducts(props.product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
