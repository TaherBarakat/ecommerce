"use client";
import React, { useEffect, useState } from "react";
import productApi from "@/app/_components/_utils/productApi";
import BeadCrumb from "@/app/_components/BeadCrumb";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "@/app/_components/ProductList";
import { usePathname } from "next/navigation";
function ProductDetails({ params }) {
     const [productDetails, setProductDetails] = useState({});
     const [productList, setProductList] = useState([]);
     const path = usePathname();
     useEffect(() => {
          productApi.getProductById(params?.productid).then((res) => {
               setProductDetails(res.data.data);
               productApi
                    .getProductByCategory(res.data.data?.attributes.category)
                    .then((res) => setProductList(res?.data?.data));
          });
     }, [params?.productid]);
     console.log(productList);

     return (
          <div className="px-10 py-8 md:px-28">
               <BeadCrumb path={path} />
               <div className="grid  grid-cols-1 md:grid-cols-2 sm:gap-10 mt-10  gap-5  ">
                    <ProductBanner product={productDetails} />
                    <ProductInfo product={productDetails} />
               </div>
               <h2 className="mt-24 text-xl mb-6 ">Similar Products</h2>
               <div>
                    <ProductList productList={productList} />
               </div>
          </div>
     );
}

export default ProductDetails;
