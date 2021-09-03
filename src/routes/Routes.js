import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import About from "../pages/About";
import Auth from "../pages/Auth";
import Discover from "../pages/Discover";
import Home from "../pages/Home";
import Navigation from "./Navigation";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/discovery" component={Discover} />
      <Route exact path="/join" component={Auth} />
    </Router>
  );
};

export default Routes;
