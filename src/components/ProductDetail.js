import React, { Component } from "react";
import clothes from "../data/data";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: "1",
      selectedSize: ""
    };
  }

  componentWillMount() {
    console.log("this.props.cartData: ", this.props.cartData);
  }

  handleInputChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  addToCart = e => {
    e.preventDefault();
    let { id, category } = this.props.match.params;
    // eslint-disable-next-line
    const foundItem = clothes[category].find(item => item.id === parseInt(id));
    // eslint-disable-next-line
    foundItem.selectedSize = this.state.selectedSize = ""
      ? this.state.selectedSize
      : foundItem.size[0];
    foundItem.quantity = this.state.quantity;
    this.props.addToCart(foundItem);
  };

  render() {
    let { id, category } = this.props.match.params;
    // eslint-disable-next-line
    const foundItem = clothes[category].find(item => item.id === parseInt(id));
    return (
      <div
        className="clothingItem"
        key={foundItem.id}
        style={{ marginTop: "7em" }}
      >
        <span className="clothingItemContainer">
          <img
            className="productDetailImg"
            src={foundItem.img}
            alt={foundItem.productName}
            style={{
              margin: "0 auto",
              alignSelf: "center"
            }}
          />
          <div className="addToCartForm">
            <form onSubmit={this.addToCart}>
              <p
                style={{
                  textTransform: "none",
                  paddingTop: ".5em"
                }}
                className="card-subtitle"
              >
                {foundItem.productName}, {foundItem.color}
                {foundItem.fit}
                {foundItem.style}
              </p>
              <span className="text-muted">${foundItem.price}</span>
              <br />
              <span>
                <label>Size:</label>
                <select
                  onChange={this.handleInputChange}
                  className="form-control"
                  name="size"
                  value={this.state.selectedSize}
                  required
                >
                  {foundItem.size.map((selectedSize, index) => {
                    return (
                      <option key={selectedSize} value={selectedSize}>
                        {selectedSize}
                      </option>
                    );
                  })}
                </select>
              </span>
              <br />
              <span>
                <label>Qty:</label>
                <select
                  onChange={this.handleInputChange}
                  className="form-control"
                  name="quantity"
                  value={this.props.quantity}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </span>
              <button
                style={{
                  width: "100%",
                  fontFamily: "Lato",
                  margin: "1em 0"
                }}
                className="btn btn-primary"
              >
                ADD TO CART
              </button>
            </form>
          </div>
        </span>
      </div>
    );
  }
}
