import React, { Component } from "react";
import "./home.css";
import LandingPicture from "../../Assets/img/food.jpg";
import axios from "axios";

class HomePicture extends Component {
  constructor() {
    super();

    this.state = {};
  }

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
            <h3
              style={{
                fontSize: "2rem",
                marginTop: "1rem",
                marginBottom: "-1rem"
              }}
            >
              Sign up to our newsletter
            </h3>
            <form className="text-center" style={{ marginTop: "2rem" }}>
              <input
                style={{
                  backgroundColor: "#fff",
                  minWidth: "150px",
                  padding: "20px 20px 20px 20px"
                }}
                className="form__input"
                type="text"
                name="recipeName"
              />
              <button className="btn btn-primary btn-lg rounded-pill">
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
