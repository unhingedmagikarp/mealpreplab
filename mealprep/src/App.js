import React, { Component } from "react";
import AppNavbar from "./Components/Navbar/Navbar";
import HomeContent from "./Components/Home/HomeContent";
import FooterItem from "./Components/Footer/Footer";

import "./Assets/bootstrap/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <HomeContent />
        <FooterItem />
      </div>
    );
  }
}

export default App;
