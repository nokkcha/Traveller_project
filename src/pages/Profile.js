import React from "react";
import { getAuth, signOut } from "@firebase/auth";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const onClick = () => {
    const auth = getAuth();
    signOut(auth);
    history.push("/home");
  };
  return (
    <>
      <button onClick={onClick}>log out</button>
    </>
  );
};
export default Profile;
