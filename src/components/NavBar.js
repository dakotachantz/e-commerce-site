import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded fixedtotop">
        <button
          style={{ top: "1rem" }}
          className="navbar-toggler navbar-toggler-left"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <NavLink
          style={{ alignSelf: "center" }}
          className="navbar-brand"
          to="/"
        >
          Basics
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                data-target="#storeCollapse"
              >
                Store <span className="fa fa-caret-down" aria-hidden="true" />
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Our Story
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Get In Touch
              </NavLink>
            </li>
          </ul>
        </div>
        <span style={{ position: "absolute", right: "1rem", top: "1.3rem" }}>
          <NavLink to="/cart">
            <i className="fa fa-shopping-bag" aria-hidden="true" />
          </NavLink>
          <span className="numInBag">{this.props.cartData.length}</span>
        </span>
      </nav>
    );
  }
}
