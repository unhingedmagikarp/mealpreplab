import React from "react";
import ImageSection from "./ImageSection";
import HomePicture from "./HomePicture";
import FirstImage from "../../Assets/img/01.jpg";
import SecondImage from "../../Assets/img/02.jpg";
import ThirdImage from "../../Assets/img/03.jpg";

const HomeContent = () => {
  return (
    <React.Fragment>
      <HomePicture />
      <ImageSection
        firstClass={"order-lg-2"}
        secondClass={"order-lg-1"}
        imageFile={FirstImage}
        title={"For those who doesn't eat meat..."}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
        }
      />
      <ImageSection
        firstClass={"order-lg-1"}
        secondClass={"order-lg-2"}
        imageFile={SecondImage}
        title={"And for those who try to eat healthier"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
        }
      />
      <ImageSection
        firstClass={"order-lg-2"}
        secondClass={"order-lg-1"}
        imageFile={ThirdImage}
        title={"Or just save money and time!"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."
        }
      />
    </React.Fragment>
  );
};

export default HomeContent;
