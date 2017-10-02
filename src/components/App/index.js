import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";
import Heroes from "../Heroes";
//import Heroes from "../Heroes/index";
import HeroForm from "../Heroes/HeroForm";
import Dashboard from "../Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Git Tour of Heroes</h1>
          <nav>
            <NavLink to="/heroes" activeClassName="active">
              Heroes
            </NavLink>
            <NavLink to="/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </nav>
          <hr />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/heroes" component={Heroes} />
          <Route path={"/heroes/details/:heroid"} component={HeroForm} />
        </div>
      </Router>
    );
  }
}

export default App;
