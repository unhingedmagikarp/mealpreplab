import React, { Component } from "react";
import AppNavbar from "./Components/Navbar/Navbar";
import HomeContent from "./Components/Home/HomeContent";
import FooterItem from "./Components/Footer/Footer";
import CategoryPage from "./Components/Categories/CategoryPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./Assets/bootstrap/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AppNavbar />
          <Switch>
            <Route path="/" component={HomeContent} exact />
            <Route path="/categories" component={CategoryPage} exact />
          </Switch>
          <FooterItem />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
