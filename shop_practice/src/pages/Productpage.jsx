import React, { Component } from "react";

import { Route, NavLink, Switch } from "react-router-dom";
import NavigationList from "../components/navigation/NavigationList";
import NavigationRoutes from "../components/navigation/NavigationRoutes";
import ProductForm from "../components/productForm/ProductForm";
import ProductList from "../components/productList/ProductList";
import { productRoutes } from "../routes/productRoutes";

export default class Productpage extends Component {
  componentDidMount() {
    this.props.history.push(`${this.props.match.url}/productlist`);
  }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevProps);
  //   console.log(this.props);
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     this.props.history.push(`${this.props.match.url}/productlist`);
  //   }
  // }
  render() {
    return (
      <>
        <NavigationList routes={productRoutes} match={this.props.match.url} />

        <NavigationRoutes routes={productRoutes} match={this.props.match.url} />
      </>
    );
  }
}
