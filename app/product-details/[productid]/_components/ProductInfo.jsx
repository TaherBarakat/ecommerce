import { BadgeCheck, OctagonAlert, ShoppingCart } from "lucide-react";
import React from "react";

function ProductInfo({ product }) {
     return (
          <div>
               <h2 className="text-[20px]"> {product?.attributes?.title} </h2>
               <h2 className="text-[15px] text-gray-400">
                    {product?.attributes?.category}
               </h2>
               <h2 className="text-[11px] mt-5 ">
                    {product?.attributes?.description[0]?.children[0]?.text}
               </h2>
               <h2 className="text-[11px] items-center mt-1 text-gray-500 flex  gap-2">
                    {product?.attributes?.instantDelivery ? (
                         <BadgeCheck className="text-green-500 h-5 w-5" />
                    ) : (
                         <OctagonAlert className="text-red-500 h-5 w-5" />
                    )}
                    Eligible For Instant Delivery
               </h2>

               <h2 className="text-[32px] text-primary mt-3">
                    ${product?.attributes?.price}
               </h2>
               <button className=" flex gap-2 bg-primary hover:bg-teal-600 p-3 rounded-lg text-white ">
                    <ShoppingCart /> Add To Cart
               </button>
          </div>
     );
}

export default ProductInfo;
