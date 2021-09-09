import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import beach_img from "../assets/beach2.jpg";
import About from "./About";
const Container = styled.div`
  margin-top: 16%;
  margin-left: 30px;

  @media screen and (max-width: 550px) {
    margin-top: 25%;
  }
`;

const BackImage = styled.img`
  position: absolute;
  width: 100%;
  top: 120px;
  left: 0;
  z-index: -1;

  @media screen and (max-width: 550px) {
    top: 9%;
    height: auto;
  }
`;

const Button = styled.button`
  background: #337c8e;
  font-size: 16px;
  padding: 10px;
  width: 120px;
  color: white;
  border-radius: 20px;
  text-decoration: none;
  border: none;

  @media screen and (max-width: 550px) {
    width: 80px;
    padding: 8px;
    border-radius: 12px;
    font-size: 8px;
  }

  &: hover {
    background: #39746c;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: white;
  font-weight: 400;
  margin-top: 0;

  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
`;

const SubTitle = styled.h6`
  margin-bottom: 0;
  color: white;
  font-size: 16px;
  font-weight: 200;

  @media screen and (max-width: 550px) {
    font-size: 8px;
  }
`;

const Section = styled.div`
  margin-top: 20%;
`;
const Home = () => {
  return (
    <>
      <Container>
        <SubTitle>Discover your places..</SubTitle>
        <Title>
          Explore The <br />
          <b>Best Places</b>
        </Title>

        <BackImage src={beach_img}></BackImage>

        <Link to="/discovery">
          <Button>Let's go</Button>
        </Link>
      </Container>
      <Section>
        <About />
      </Section>
    </>
  );
};
export default Home;
