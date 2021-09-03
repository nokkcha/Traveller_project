import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Discover where you want</h1>
      <Link to="/discovery">
        <span>let's go</span>
      </Link>
    </div>
  );
};
export default Home;
