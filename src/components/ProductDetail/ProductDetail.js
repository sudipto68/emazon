import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  let { productkey } = useParams();
  console.log(productkey);
  const product = fakeData.find((pd) => pd.key === productkey);
  console.log(product);
  return (
    <div>
      {/* <Product product={product} /> */}
      {productkey}
    </div>
  );
};

export default ProductDetail;
