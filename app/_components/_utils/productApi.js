import axiosClint from "./axiosClint";

const getLatestProducts = () => axiosClint.get("/products?populate=*");
const getProductById = (id) => {
     axiosClint.get(`products/${id}?populate=*`);
     console.log(id);
};
const getProductByCategory = (category) =>
     axiosClint.get(`products?filters[category][$eq]=${category}&populate=*`);
export default { getLatestProducts, getProductByCategory, getProductById };
