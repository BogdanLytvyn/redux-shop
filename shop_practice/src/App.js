import React, { Component } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

class App extends Component{
  state = {
    cart: [
      {
        id: 'fqwfqw1',
        name: "Tomato",
        quantity: 1,
      }
    ],
  }

  addToCart = (product) => {
    if (this.state.cart.some(item => item.id === product.id)) {
      this.setState((prevState) =>
        ({ cart: [...prevState.cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)] }));
      return;
    }
    this.setState((prevState) => ({ cart: [...prevState.cart, { ...product, quantity: 1}]  }));
  }

  deleteFromCart = (productId) => {
    if (this.state.cart.some(item => item.id === productId && item.quantity > 1)) {
      this.setState((prevState) =>
        ({ cart: [...prevState.cart.map((item) => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)] }));
      return;
    }
    this.setState((prevState) => ({ cart: [...prevState.cart.filter(({ id }) => id !== productId)]}))
  }

  sendOrder = () => {
    console.log('order sanded');
    this.setState({ cart: [] });
  }
  
  render() {
    const { cart } = this.state;
    return (
      <div>
        <Header />
        <Main cart={cart} addToCart={this.addToCart} deleteFromCart={this.deleteFromCart} sendOrder={ this.sendOrder}/>
      </div>
    );
  }
};

export default App;
