import React, { Component } from "react";
import _ from "lodash";
import clothes from "../data/data";
import { NavLink } from "react-router-dom";

export default class ProductDetail extends Component {
  render() {
    let match = this.props.match;
    let { id, category } = this.props.match.params;
    let foundItem = clothes[category].find(item => item.id === parseInt(id));
    console.log("foundItem: ", foundItem);
    return (
      <div
        className="clothingItem"
        key={foundItem.id}
        style={{ marginTop: "6em" }}
      >
        <span style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <img
            src={foundItem.img}
            alt={foundItem.productName}
            style={{
              height: 350,
              width: 350,
              margin: "0 auto",
              alignSelf: "center"
            }}
          />{" "}
          <hr />
          <div
            style={{
              display: "flex",
              width: "25%",
              flexDirection: "column",
              padding: "1em",
              margin: "0 auto"
            }}
          >
            <p
              style={{ textTransform: "none", paddingTop: ".5em" }}
              className="card-subtitle"
            >
              &nbsp;&nbsp;{foundItem.productName}, {foundItem.color}
              {foundItem.fit}
              {foundItem.style}
            </p>
            <span style={{ marginLeft: ".4em" }} className="text-muted">
              ${foundItem.price}
            </span>
            <br />
            <span>
              {" "}
              Size:
              <select className="form-control" name="" id="">
                {foundItem.size.map((size, index) => {
                  return (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  );
                })}
              </select>
            </span>
            <span>
              {" "}
              <label>Qty:</label>
              <select className="form-control">
                Qty:
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
            </span>
            <button
              style={{
                width: "90%",
                fontFamily: "Lato",
                background: "#3CBC8D"
              }}
              className="btn btn-primary"
            >
              ADD TO CART
            </button>
          </div>
        </span>
      </div>
    );
  }
}
