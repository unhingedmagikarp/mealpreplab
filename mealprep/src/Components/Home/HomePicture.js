import React, { Component } from "react";
import "./home.css";
import LandingPicture from "../../Assets/img/food.jpg";
import axios from "axios";

class HomePicture extends Component {
  constructor() {
    super();

    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    e.target.reset();
    this.newSignup();
  };

  newSignup = () => {
    axios
      .post("http://localhost:3004/signups", {
        signups: this.state.signup
      })
      .then(response => {
        delete this.state.signup;
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <header
        className="masthead text-center text-white"
        style={{ backgroundImage: `url(${LandingPicture})` }}
      >
        <div className="masthead-content">
          <div className="titleContainer">
            <h1 className="masthead-heading mb-0">Meal Prep Lab</h1>
            <h2 className="masthead-subheading mb-0">
              The ultimate food website
            </h2>
            <h3 className="signUp">Sign up to our newsletter</h3>
            <form
              onSubmit={this.handleSubmit}
              className="text-center"
              style={{ marginTop: "2rem" }}
            >
              <input
                className="emailField"
                type="text"
                name="signup"
                onChange={this.handleChange}
              />
              <button className="submitButton btn btn-primary btn-lg rounded-pill">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default HomePicture;
