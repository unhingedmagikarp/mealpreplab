import React, { Component } from "react";
import LandingPicture from "../../Assets/img/cats.jpg";
import SearchItem from "../Search/SearchItem";
import CategoryItem from "./CategoryItem";
import "./Category.css";

class CategoryPage extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "125px" }}>
        <SearchItem />
        <div className="block-heading pageTitle">
          <h1 className="text-center textColor">Categories</h1>
        </div>

        <div style={{ minHeight: "800px" }}>
          <div className="row justify-content-center">
            <CategoryItem
              title="Bodybuilder"
              displayImage={LandingPicture}
              description={"For everyone"}
            />
            <CategoryItem
              title="Bodybuilder"
              displayImage={LandingPicture}
              description={"For everyone"}
            />
            <CategoryItem
              title="Bodybuilder"
              displayImage={LandingPicture}
              description={"For everyone"}
            />
            <CategoryItem
              title="Bodybuilder"
              displayImage={LandingPicture}
              description={"For everyone"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPage;
