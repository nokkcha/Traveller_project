import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = ({ isLoggedIn, userObj }) => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    margin: 0 30px 0 30px;
  `;
  const Navigation = styled.nav`
    justify-self: center;
    margin: 10px;
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
      background: #194d4a;
    }
  `;

  const Menu = styled(Link)`
    margin-left: 20px;
    color: black;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }

    &: active {
      font-weight: 500;
    }
  `;

  const Title = styled(Link)`
    color: black;
    text-decoration: none;
  `;

  return (
    <Container>
      <Title to="/home">
        <h1>Traveller</h1>
      </Title>
      <Navigation>
        {isLoggedIn ? (
          <>
            <Menu to="/home">Home</Menu>
            <Menu to="/about">about</Menu>
            <Menu to="/discovery">Discover</Menu>
            <Menu to="/profile">Profile</Menu>
          </>
        ) : (
          <>
            <Menu to="/login">Login</Menu>
            <Menu to="/join">Sign In</Menu>
          </>
        )}
      </Navigation>
      <SignIn to="/join">Sign In</SignIn>
    </Container>
  );
};

export default Navigation;
