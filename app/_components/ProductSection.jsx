"use client";

import React, { useEffect, useState } from "react";

import ProductList from "./ProductList";
import productApi from "./_utils/productApi";

function ProductSection() {
     const [productList, setProductList] = useState([]);

     useEffect(() => {
          productApi
               .getLatestProducts()
               .then((res) => setProductList(res.data.data));
     }, []);
     console.log(productList);

     return (
          <div className="px-10 md:px-20 w-[95vw] ">
               <h2 className="my-4 text-3xl ">Our Lates Products</h2>
               <ProductList productList={productList} />
          </div>
     );
}

export default ProductSection;
