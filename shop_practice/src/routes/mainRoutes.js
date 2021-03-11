import { lazy } from "react";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/Homepage")),
  },
  {
    name: "About",
    path: "/about",
    exact: true,
    component: lazy(() => import("../pages/Aboutpage")),
  },
  {
    name: "Product",
    path: "/product",
    exact: false,
    component: lazy(() => import("../pages/Productpage")),
  },
  {
    name: "AllProducts",
    path: "/allproducts",
    exact: false,
    component: lazy(() => import("../pages/AllProductsPage")),
  },
  {
    name: "Cart",
    path: "/cart",
    exact: false,
    component: lazy(() => import("../pages/Cartpage")),
  },
];
