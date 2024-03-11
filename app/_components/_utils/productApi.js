import axiosClint from "./axiosClint";

const getLatestProducts = () => axiosClint.get("/products?populate=*");
const getProductById = (id) => axiosClint.get(`products/${id}?populate=*`);
export default { getLatestProducts, getProductById };
