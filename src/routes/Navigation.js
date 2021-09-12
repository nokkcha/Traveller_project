import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  top: 0;
  right: 0;
  width: 100%;
  margin: 0 0;
  position: fixed;
  background: white;
  z-index: 1;

  @media screen and (max-width: 550px) {
    grid-template-columns: 2fr 1fr;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    margin: 0;
    background: #337c8e;
    z-index: 1;
  }
`;
const Navigations = styled.nav`
  justify-self: center;
  margin: 10px;

  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 26px;
    left: 60%;
    width: 12em;
    background: #337c8e;
    padding: 10px 0 10px 0;
    z-index: -1;
  }
`;

const SignIn = styled(Link)`
  width: 100px;
  padding: 5px 0 5px 0;
  justify-self: end;
  background: #337c8e;
  color: white;
  text-align: center;
  border-radius: 20px;
  text-decoration: none;
  font-size: 15px;
  margin-right: 20px;

  @media (max-width: 550px) {
    display: none;
  }

  &: hover {
    background: #479e91;
  }
`;

const Menu = styled(Link)`
  margin-left: 20px;
  color: black;
  text-decoration: none;

  &: hover,
  &: active {
    color: #349386;
  }

  @media screen and (max-width: 550px) {
    color :white;
    font-size: 13px;
    margin: 20px;
    text-align: center;
    

    &: hover {
      color: #eff0f0;
    }
  }

`;

const Title = styled(Link)`
  color: black;
  text-decoration: none;
  margin-left: 20px;

  @media screen and (max-width: 550px) {
    font-size: 10px;
    color: white;
    margin-left: 40px;
  }
`;

const ToggleButton = styled.button`
  display: none;

  @media screen and (max-width: 550px) {
    display: inline;
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    justify-self: end;
    margin-right: 20px;
  }
`;

const Navigation = ({ isLoggedIn }) => {
  const [isToggled, setIsToggled] = useState(false);

  const ToggleClick = () => {
    setIsToggled(!isToggled);
  };
  return (
    <Container>
      <Title to="/home">
        <h1>Traveller</h1>
      </Title>
      <Navigations>
        {isToggled ? (
          <>
            {isLoggedIn ? (
              <>
                <Menu to="/home">Home</Menu>
                <Menu to="/discovery">Discover</Menu>
                <Menu to="/board">Board</Menu>
                <Menu to="/profile">Profile</Menu>
              </>
            ) : (
              <>
                <Menu to="/home">Home</Menu>
                <Menu to="/discovery">Discover</Menu>
                <Menu to="/login">Login</Menu>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </Navigations>
      <SignIn to="/join">Sign In</SignIn>
      <ToggleButton onClick={ToggleClick}>
        <FontAwesomeIcon icon={faBars} />
      </ToggleButton>
    </Container>
  );
};

export default Navigation;
