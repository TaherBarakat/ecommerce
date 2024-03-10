import axiosClint from "./axiosClint";

const getLatestProducts = () => axiosClint.get("/products?populate=*");

export default { getLatestProducts };
