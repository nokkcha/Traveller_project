import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "@firebase/auth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: none;
  width: 120px;
  height: 40px;
  border-radius: 20px;
`;

const Container = styled.div`
  margin-top: 20%;
  text-align: center;
`;
const Profile = ({ userObj }) => {
  const [user, setUser] = useState(userObj.displayName);
  const history = useHistory();
  const onClick = () => {
    const auth = getAuth();
    signOut(auth);
    history.push("/home");
  };

  useEffect(() => {
    if (user === null) {
      setUser("Traveller");
    } else {
      return;
    }
  }, []);

  return (
    <>
      <Container>
        <h2>안녕하세요,{user}님.</h2>
        <Button onClick={onClick}>log out</Button>
      </Container>
    </>
  );
};
export default Profile;
