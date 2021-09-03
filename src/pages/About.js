import React from "react";
import styled from "styled-components";
import porto from "../assets/porto.jpg";
import bali from "../assets/bali.jpg";
import seoul from "../assets/seoul.jpg";

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  left: 0;
  margin-top: 5%;
`;

const MainTitle = styled.h1`
  color: #37766e;
  text-align: center;
  font-size: 24px;
`;

const Section = styled.div`
  text-align: center;
  font-size: 14px;
  color: gray;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Box = styled.div`
  display: inline-flex;
  margin: 10px;
  flex-direction: row;
  width: 180px;
  height: 280px;

  &: hover {
    bottom: 10px;
    width: 210px;
    height: 310px;
    transition: 0.5s;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImgTitle = styled.span`
  position: relative;
  font-size: 24px;
  color: white;
  font-weight: 600;
  top: 45%;
  right: 64%;
`;

const text =
  "you can find the most beautiful and pleasant places at the best prices with special discount.";

const About = () => {
  return (
    <Background>
      <MainTitle>Discover The Most Attractive Places</MainTitle>
      <Section>{text}</Section>
      <Container>
        <Box>
          <Image src={porto} width="100px" />
          <ImgTitle>Porto</ImgTitle>
        </Box>

        <Box>
          <Image src={bali} width="100px" />
          <ImgTitle>Bali</ImgTitle>
        </Box>
        <Box>
          <Image src={seoul} width="100px" />
          <ImgTitle>Seoul</ImgTitle>
        </Box>
      </Container>
    </Background>
  );
};
export default About;
