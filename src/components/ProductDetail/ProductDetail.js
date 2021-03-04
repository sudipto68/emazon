import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  let { productkey } = useParams();
  const product = fakeData.find((pd) => pd.key === productkey);
  return (
    <div>
      <Product showAddToCart={false} product={product} />
    </div>
  );
};

export default ProductDetail;
