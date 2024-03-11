"use client";
import React, { useEffect } from "react";
import productApi from "@/app/_components/_utils/productApi";
function ProductDetails({ params }) {
     useEffect(() => {
          console.log(
               productApi
                    .getProductById(params?.productid)
                    .then((res) => console.log(res.data.data))
          );
     }, [params?.productid]);
     return <div>{params?.productid} D</div>;
}

export default ProductDetails;
