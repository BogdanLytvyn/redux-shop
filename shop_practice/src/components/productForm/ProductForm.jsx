import React, { Component } from "react";
import {addProduct} from '../../redux/products/product.action'
import {connect} from 'react-redux'
// import PropTypes from "prop-types";

import { addNewProduct } from "../../services/productsApi";
import { ProductFormContainer } from "./productFormStyles";

const categories = ["fruits", "drinks", "clothes", "books"];

const initialState = {
  name: "",
  price: "",
  avatar: "",
  description: "",
  sale: false,
  category: categories[0],
};

const toDataUrl = (element) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(element.files[0]);
  });
};

class ProductForm extends Component {
  state = {
    ...initialState,
  };

  onHandleChange = (e) => {
    if (e.target.type === "file") {
      toDataUrl(e.target).then((data) => this.setState({ avatar: data }));
      return;
    }
    if (e.target.type === "checkbox") {
      this.setState((prevState) => ({
        sale: !prevState.sale,
      }));
      return;
    }
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state)
    // addNewProduct(this.state);
    // this.setState({
    //   ...initialState,
    // });
  };

  render() {
    const { name, price, category, description } = this.state;
    return (
      <ProductFormContainer>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.onHandleChange}
              value={name}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              onChange={this.onHandleChange}
              value={price}
            />
          </label>
          <label>
            Avatar:
            <input type="file" name="avatar" onChange={this.onHandleChange} />
          </label>

          <label>
            Description:
            <textarea
              type="text"
              name="description"
              onChange={this.onHandleChange}
              value={description}
            />
          </label>
          <div className="options">
            <label>
              Category:
              <select
                name="category"
                onChange={this.onHandleChange}
                value={category}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Sale:
              <input
                type="checkbox"
                name="sale"
                checked={this.state.sale}
                onChange={this.onHandleChange}
              />
            </label>
          </div>
          <button className="button" type="submit">
            Add product
          </button>
        </form>
      </ProductFormContainer>
    );
  }
}

export default connect(null, {addProduct})(ProductForm);
