import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isLoggedIn, userObj }) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
          <Link to="/discovery">Discover</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/join">Join</Link>
        </>
      )}
    </div>
  );
};

export default Navigation;
