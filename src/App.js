import React, { Component } from "react";
import "./styles/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import BaseLayout from "./components/BaseLayout";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        {
          id: 6,
          price: 265,
          productName: "The Albion Jacket",
          img:
            "https://assets.bespokepost.com/media/W1siZiIsIjIwMTcvMDgvMzAvMTcvMjgvNDIvMDQ1ZjI1MTctOTYzMC00ODhmLWIzZDctNTg2YzNhYzk0YjkwL0dSRUVOIEFMQklPTiAxLmpwZyJdLFsicCIsInRodW1iIiwiNTIweFx1MDAzZSJdLFsicCIsImVuY29kZSIsImpwZyIsIi1xdWFsaXR5IDcxIC1iYWNrZ3JvdW5kICNGNkY0RjQgLWZsYXR0ZW4iXV0/GREEN%20ALBION%201.jpg?sha=4d34c4d2a640df2d",
          quantity: 1,
          size: "Small",
          selectedSize: "Small",
          color: "Army"
        },
        {
          id: 4,
          price: 180,
          productName: "Bowery Standard Salton",
          img:
            "https://assets.bespokepost.com/media/W1siZiIsIjIwMTcvMDgvMzAvMjEvNDgvNDMvZDkxNDIxNGMtNTc1Ny00NzlmLWI4MjItNDUwODllZjAxMDNlL2NpdHplbnMtb2YtaHVtYW5pdHktcHYtYm93ZXJ5LTEuanBnIl0sWyJwIiwidGh1bWIiLCI1MjB4XHUwMDNlIl0sWyJwIiwiZW5jb2RlIiwianBnIiwiLXF1YWxpdHkgNzEgLWJhY2tncm91bmQgI0Y2RjRGNCAtZmxhdHRlbiJdXQ/citzens-of-humanity-pv-bowery-1.jpg?sha=064cf229676c343b",
          quantity: 1,
          size: "28",
          selectedSize: "28",
          fit: "Slim Fit"
        }
      ]
    };
  }

  ShoppingCart = props => {
    return (
      <Cart
        removeFromCart={this.removeFromCart}
        cartData={this.state.cart}
        {...props}
      />
    );
  };

  ProductDetailData = props => {
    return (
      <ProductDetail
        addToCart={this.addToCart}
        cartData={this.state.cart}
        {...props}
      />
    );
  };

  addToCart = foundItem => {
    let savedItem = { ...foundItem };
    console.log("savedItem: ", savedItem);
    let { cart } = this.state;
    cart.push(savedItem);
    this.setState({ cart }, () => console.log(this.state.cart));
  };

  removeFromCart = index => {
    let newCart = this.state.cart.splice(index, 1);
    this.setState(newCart, () => {});
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BaseLayout cartData={this.state.cart}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/cart" component={this.ShoppingCart} />
              <Route path="/:category/:id" component={this.ProductDetailData} />
              <Route path="/:category" component={ProductList} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
