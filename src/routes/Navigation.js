import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="discovery">Discover</Link>
      <Link to="Join">Join</Link>
    </div>
  );
};

export default Navigation;
