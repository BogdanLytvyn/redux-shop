import ProductForm from "../components/productForm/ProductForm";
import ProductList from "../components/productList/ProductList";

export const productRoutes = [
  {
    exact: true,
    path: "/productlist",
    name: "List",
    component: ProductList,
  },
  {
    exact: true,
    path: "/productform",
    name: "Create",
    component: ProductForm,
  },
];
