import React, { Component } from "react";
import LandingPicture from "../../Assets/img/cats.jpg";
import SearchItem from "../Search/SearchItem";

class CategoryPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="block-heading">
          <h2 className="text-info">Categories</h2>
        </div>
        <SearchItem />
        <div style={{ minHeight: "800px" }}>Something</div>
      </div>
    );
  }
}

export default CategoryPage;
