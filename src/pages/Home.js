import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import beach_img from "../assets/beach2.jpg";
import About from "./About";
const Container = styled.div`
  margin-top: 16%;
  margin-left: 30px;
`;

const BackImage = styled.img`
  position: absolute;
  width: 100%;
  top: 120px;
  left: 0;
  z-index: -1;
`;

const Button = styled.button`
  background: #349386;
  font-size: 16px;
  padding: 10px;
  width: 120px;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  border: none;

  &: hover {
    background: #39746c;
  }
`;

const Title = styled.h1`
  font-size: 48px;

  color: white;
  font-weight: 600;
  margin-top: 0;
`;

const SubTitle = styled.h6`
  margin-bottom: 0;
  color: white;
  font-size: 16px;
  font-weight: 200;
`;

const Home = () => {
  return (
    <>
      <Container>
        <SubTitle>Discover your places..</SubTitle>
        <Title>Explore The Best Places</Title>

        <BackImage src={beach_img}></BackImage>

        <Link to="/discovery">
          <Button>Let's go</Button>
        </Link>
      </Container>
    </>
  );
};
export default Home;
