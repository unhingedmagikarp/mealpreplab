import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions/categoryActions";
import PropTypes from "prop-types";

import LandingPicture from "../../Assets/img/cats.jpg";
import SearchItem from "../Search/SearchItem";
import CategoryItem from "./CategoryItem";
import "./Category.css";

class CategoryPage extends Component {
  // componentWillMount() {
  //   this.props.fetchCategories();
  // }

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

// CategoryPage.PropTypes = {
//   fetchCategories: PropTypes.func.isRequired,
//   categories: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({
  categories: state.categories.items
});

export default connect(
  mapStateToProps,
  { fetchCategories }
)(CategoryPage);
