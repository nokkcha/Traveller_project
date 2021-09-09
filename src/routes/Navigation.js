import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  margin: 0 30px 0 30px;

  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr 2fr;
  }
`;
const Navigations = styled.nav`
  justify-self: center;
  margin: 10px;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

const SignIn = styled(Link)`
  width: 100px;
  padding: 5px 0 5px 0;
  justify-self: end;
  background: #349386;
  color: white;
  text-align: center;
  border-radius: 20px;
  text-decoration: none;
  font-size: 15px;

  &: hover {
    background: #479e91;
  }
`;

const Menu = styled(Link)`
  margin-left: 20px;
  color: black;
  text-decoration: none;

  &: hover {
    color: #349386;
  }

  &: active {
    font-weight: 500;
  }
`;

const Title = styled(Link)`
  color: black;
  text-decoration: none;

  @media screen and (max-width: 550px) {
    font-size: 10px;
    color: white;
  }
`;

const Navigation = ({ isLoggedIn }) => {
  return (
    <Container>
      <Title to="/home">
        <h1>Traveller</h1>
      </Title>
      <Navigations>
        {isLoggedIn ? (
          <>
            <Menu to="/home">Home</Menu>
            <Menu to="/about">about</Menu>
            <Menu to="/discovery">Discover</Menu>
            <Menu to="/board">Board</Menu>
            <Menu to="/profile">Profile</Menu>
          </>
        ) : (
          <>
            <Menu to="/home">Home</Menu>
            <Menu to="/about">About</Menu>
            <Menu to="/discovery">Discover</Menu>
            <Menu to="/login">Login</Menu>
          </>
        )}
      </Navigations>
      <SignIn to="/join">Sign In</SignIn>
    </Container>
  );
};

export default Navigation;
