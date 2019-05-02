import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./store";
import PropTypes from "prop-types";

import AppNavbar from "./Components/Navbar/Navbar";
import HomeContent from "./Components/Home/HomeContent";
import FooterItem from "./Components/Footer/Footer";
import CategoryPage from "./Components/Categories/CategoryPage";

import "./Assets/bootstrap/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <AppNavbar />
            <Switch>
              <Route path="/" component={HomeContent} exact />
              <Route path="/categories" render={() => <CategoryPage />} exact />
            </Switch>
            <FooterItem />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

// App.propTypes = {
//   store: PropTypes.object.isRequired
// };

export default App;
