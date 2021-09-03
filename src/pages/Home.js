import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "@firebase/auth";

const Home = () => {
  const onClick = () => {
    const auth = getAuth();
    signOut(auth);
  };
  return (
    <div>
      <h1>Discover where you want</h1>
      <Link to="/discovery">
        <span>let's go</span>
      </Link>
      <button onClick={onClick}>log out</button>
    </div>
  );
};
export default Home;
