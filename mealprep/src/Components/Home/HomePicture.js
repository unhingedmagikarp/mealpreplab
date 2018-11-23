import React from "react";
import "./home.css";
import LandingPicture from "../../Assets/img/food.jpg";

const HomePicture = () => {
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
          <a
            className="btn btn-primary btn-xl rounded-pill mt-5"
            role="button"
            href="/"
          >
            Learn more
          </a>
        </div>
      </div>
    </header>
  );
};

export default HomePicture;
