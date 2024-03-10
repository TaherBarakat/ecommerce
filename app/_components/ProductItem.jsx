import React from "react";
import Image from "next/image";
import { List } from "lucide-react";
function ProductItem({ product }) {
     console.log(product?.attributes?.banner?.data?.attributes?.url);
     return (
          <div className="p-1 border-teal-400 rounded-lg hover:border hover:shadow-md hover:cursor-pointer ">
               <Image
                    src={product?.attributes?.banner?.data?.attributes?.url}
                    alt={"banner-card"}
                    width={300}
                    height={350}
                    className="rounded-t-lg object-cover h-[25vh]  "
               />
               <div className="flex justify-between  items-center p-3 bg-gray-100 rounded-b-lg  ">
                    <div>
                         <h2 className="text-[0.8rem] font-medium ">
                              {product?.attributes?.title}
                         </h2>
                         <h2 className="text-[0.7rem] font-medium text-gray-400 flex gap-1 items-center line-clamp-1 ">
                              <List w-4 h-4 /> {product?.attributes?.category}
                         </h2>
                    </div>
                    <h2>{product?.attributes?.price}</h2>
               </div>
          </div>
     );
}

export default ProductItem;
