import React from "react";

const ImageSection = props => {
  return (
    <section>
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-lg-6 ${props.firstClass}`}>
            <div className="p-5">
              <img className="rounded-circle img-fluid" src={props.imageFile} />
            </div>
          </div>
          <div className={`col-lg-6 ${props.secondClass}`}>
            <div className="p-5">
              <h2 className="display-4">{props.title}</h2>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
