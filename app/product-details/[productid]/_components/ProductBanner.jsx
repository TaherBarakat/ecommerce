import React from "react";
import Image from "next/image";
function ProductBanner({ product }) {
     return (
          <div>
               <Image
                    width={400}
                    height={400}
                    alt="product-details-banner"
                    src={product?.attributes?.banner?.data?.attributes?.url}
               />
          </div>
     );
}

export default ProductBanner;
