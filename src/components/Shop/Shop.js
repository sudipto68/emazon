import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
  const slicedProducts = fakeData.slice(0, 15);
  const [products, setProducts] = useState(slicedProducts);
  const [cart, setCart] = useState([]);
  const addProducts = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    const productsCount = newCart.filter((pd) => pd.key === product.key);
    const count = productsCount.length;
    addToDatabaseCart(product.key, count);
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
