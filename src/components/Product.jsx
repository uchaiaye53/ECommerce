import React, { useContext } from "react";
import { ProductList } from "../contextAPI/Context";
import { Scrollbars } from "react-custom-scrollbars-2";
import { ProductCard } from "./ProductCard";

function Product() {
  const [products, setProducts] = useContext(ProductList);

  return (
    <>
      <Scrollbars style={{ width: 1535, height: 670 }}>
        <div className="mx-20 bg-blue-100">
          <div className="grid grid-cols-4 gap-10 justify-items-center">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </Scrollbars>
    </>
  );
}

export default Product;
