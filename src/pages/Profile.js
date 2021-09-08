import React from "react";
import { getAuth, signOut } from "@firebase/auth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  width: 120px;
  height: 40px;
  border-radius: 20px;
`;
const Profile = () => {
  const history = useHistory();
  const onClick = () => {
    const auth = getAuth();
    signOut(auth);
    history.push("/home");
  };
  return (
    <>
      <Button onClick={onClick}>log out</Button>
    </>
  );
};
export default Profile;
