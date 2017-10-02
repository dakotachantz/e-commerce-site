import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "5em" }}>
        <h3 style={{ textAlign: "center" }}>Get In Touch below!</h3>
        <form
          action=""
          className="container"
          style={{ display: "flex", flexDirection: "column", width: "60%" }}
        >
          <label for="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
          />
          <br />
          <label for="">Email</label>
          <input
            className="form-control"
            type="email"
            id=""
            name="email"
            placeholder="Your email.."
          />
          <br />
          <label for="subject">Subject</label>
          <textarea
            className="form-control"
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
          />
          <br />
          <button
            className="btn btn-primary"
            style={{ width: "50%", margin: "1rem auto" }}
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
