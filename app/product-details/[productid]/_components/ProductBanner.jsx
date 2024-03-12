import React from "react";
import Image from "next/image";
function ProductBanner({ product }) {
     console.log(product?.attributes);
     return (
          <div>
               {product.attributes ? (
                    <Image
                         width={400}
                         height={400}
                         alt="product-details-banner"
                         src={
                              product?.attributes?.banner?.data?.attributes?.url
                         }
                         className="rounded-lg"
                    />
               ) : (
                    <div className="w-[400px] h-[255px] bg-slate-200 rounded-lg animate-pulse "></div>
               )}
          </div>
     );
}

export default ProductBanner;
