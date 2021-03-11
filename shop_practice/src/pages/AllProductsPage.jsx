import { Component } from "react";
import axios from 'axios';
import { ProductListCont } from "../components/productList/ProductStyles";
import {connect} from 'react-redux'
import {deleteProduct} from '../redux/products/product.action'

class AllProductPage extends Component {
    state = {
    // products: [],
  };

  // componentDidMount() {
  //   axios
  //     .get(`${process.env.REACT_APP_DATA_BASE_BASEURL}/products.json`)
  //     .then((response) => {
  //       if (response.data) {
  //         const result = Object.keys(response.data).map((key) => ({
  //           id: key,
  //           ...response.data[key],
  //         }));
  //         this.setState({ products: result });
  //       }
  //     });
  // }
  addProduct = event => {
    // const { id } = event.target.dataset;
    // const product = this.state.products.find(item => item.id === id)
    // this.props.addToCart(product);
  }

  deleteProduct =(event)=>{
    const { id } = event.target.dataset
    this.props.deleteProduct(id)
  }



  render() {
    const { productItems } = this.props;
    return (
      <ProductListCont>
        {productItems.map(
          ({ avatar, category, description, id, name, price, sale }) => {
            return (
              <li className="product_item" key={id}>
                <img
                  className="avatar"
                  src={avatar ? avatar : ''}
                  alt="avatar"
                />
                <h3>{name}</h3>
                <p>
                  <b>Price:</b> {price}
                </p>
                <p>
                  <b>Description:</b> {description}
                </p>
                <p>
                  <b>Sale:</b> {sale}
                </p>
                <p>
                  <b>Category:</b> {category}
                </p>
                <button type="button" data-id={id} onClick={this.deleteProduct}>
                 Delete
                </button>
              </li>
            );
          }
        )}
      </ProductListCont>
     );
  }
}
 

const mapStateToProps = (state) => ({
  productItems: state.productItems,
})

const mapDispatchToProps = { deleteProduct }
export default connect(mapStateToProps, mapDispatchToProps)(AllProductPage);