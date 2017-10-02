import React, { Component } from "react";
import { Link } from "react-router-dom";
// import clothes from "../data/data";
let cartTotal;
export default class Cart extends Component {
  componentWillMount() {
    this.calculateCart();
  }

  calculateCart = () => {
    let totalsArray = this.props.cartData.map(item => {
      let total = 0;
      return (total += item.price);
    });
    cartTotal = totalsArray.reduce((a, b) => a + b, 0);
  };
  removeFromCart = e => {
    let target = e.target.getAttribute("data-index");
    let index = target;
    this.props.removeFromCart(index);
    this.calculateCart();
  };

  render() {
    console.log(this.props);
    let cartItems = this.props.cartData.map((item, index) => {
      return (
        <tr key={item.id} id={index}>
          <td>
            <Link to="#">
              <img style={{ height: 100 }} src={item.img} alt="White Tee" />
            </Link>
          </td>
          <td>
            <Link to="#">{item.productName}</Link>
          </td>
          <td>{item.selectedSize}</td>
          <td>
            <select
              className="form-control"
              onChange={this.calculateCart}
              defaultValue={item.quantity}
            >
              <option default value="1">
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </td>
          <td>${item.price}</td>
          <td>
            <span>
              <i
                onClick={this.removeFromCart}
                className="fa fa-trash-o"
                data-index={index}
              />
            </span>
          </td>
        </tr>
      );
    });
    return (
      <div className="container cart-container">
        <div id="basket">
          <div style={{ display: "flex", flex: 1 }} className="card">
            <div className="card-header">
              <h3>Your Cart</h3>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan="2">Product</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th colSpan="2">Price</th>
                  </tr>
                </thead>
                <tbody>{cartItems}</tbody>
              </table>
            </div>
            {/* <!-- /.table-responsive --> */}
          </div>

          <div>
            <div
              style={{ display: "flex", flex: 1 }}
              className="card"
              id="order-summary"
            >
              <div className="card-header">
                <h3>Order summary</h3>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <th>${cartTotal}</th>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <th>-</th>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <th>FREE</th>
                    </tr>
                    <tr className="total">
                      <td>Total</td>
                      <th>${cartTotal}</th>
                    </tr>
                  </tbody>
                </table>
                <button style={{ width: "90%" }} className="btn btn-primary">
                  CHECK OUT
                </button>
              </div>
            </div>
          </div>
          {/* <!-- /.col-md-3 --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
    );
  }
}
