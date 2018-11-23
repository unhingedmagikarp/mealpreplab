import React, { Component } from "react";
import { NavbarToggler, Collapse } from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
        <div className="container">
          <a className="navbar-brand" href="/">
            Meal Prep Lab
          </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  All Recipes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Categories
                </a>
              </li>
            </ul>
          </Collapse>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
