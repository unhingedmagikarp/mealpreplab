import React from "react";

const CategoryItem = props => {
  return (
    <a
      className="col-sm-6 col-lg-4"
      href={props.path}
      style={{ textDecoration: "none" }}
    >
      <div className="card clean-card text-center">
        <img src={props.displayImage} className="card-img-top w-100 d-block" />
        <div className="card-body info">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </a>
  );
};

export default CategoryItem;
