import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = (props) => {
  const { name, price, img, seller, stock, key } = props.product;
  const addProducts = props.addProducts;
  return (
    <div className="product">
      <div>
        <img src={img} alt="productImage" />
      </div>
      <div className="productDetails">
        <h4 className="productName">
          <Link className="productNameLink" to={"/product/" + key}>
            {name}
          </Link>
        </h4>
        <p>by: {seller}</p>
        <h5>${price}</h5>
        <p>Only {stock} left in stock - order soon</p>
        {props.showAddToCart && (
          <button onClick={() => addProducts(props.product)}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
