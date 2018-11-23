import React, { Component } from "react";
import AppNavbar from "./Components/Navbar/Navbar";
import HomePicture from "./Components/Home/HomePicture";
import HomeContent from "./Components/Home/HomeContent";

import "./Assets/bootstrap/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <HomePicture />
        <HomeContent />
      </div>
    );
  }
}

export default App;
