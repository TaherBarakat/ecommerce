import ProductItem from "./ProductItem";
function ProductList({ productList }) {
     return (
          <div className="grid  xs:grid-cols-1 w-[90%] sm:grid-cols-3 md:grid-cols-4 lg:grid-rows-5 gap-2 ">
               {productList?.map((product) => (
                    <ProductItem
                         key={product.id}
                         product={product}
                    ></ProductItem>
               ))}
          </div>
     );
}

export default ProductList;
