import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const slicedProducts = fakeData.slice(0, 15);
  const [products, setProducts] = useState(slicedProducts);
  const [cart, setCart] = useState([]);
  const addProducts = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            showAddToCart={true}
            key={product.key}
            product={product}
            addProducts={addProducts}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
