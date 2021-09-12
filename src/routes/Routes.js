import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import About from "../pages/About";
import Auth from "../pages/Auth";
import Board from "../pages/Board";
import Discover from "../pages/Discover";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Navigation from "./Navigation";

const Routes = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      <Redirect exact from="/" to="/home" />
      <Navigation userObj={userObj} isLoggedIn={isLoggedIn} />
      <>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discovery" component={Discover} />
        <Route exact path="/profile" component={Profile}>
          <Profile userObj={userObj} />
        </Route>
        <Route exact path="/join" component={Auth} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/board" component={Board}>
          <Board userObj={userObj} />
        </Route>
      </>
    </Router>
  );
};

export default Routes;
