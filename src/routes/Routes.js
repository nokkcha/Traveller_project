import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import About from "../pages/About";
import Auth from "../pages/Auth";
import Discover from "../pages/Discover";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Navigation from "./Navigation";

const Routes = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      <Navigation userObj={userObj} isLoggedIn={Boolean(userObj)} />
      {isLoggedIn ? (
        <>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discovery" component={Discover} />
        </>
      ) : (
        <>
          <Route exact path="/join" component={Auth} />
          <Route exact path="/login" component={Login} />
        </>
      )}
    </Router>
  );
};

export default Routes;
