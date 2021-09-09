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
  margin-top: 13%;
`;

const MainTitle = styled.h1`
  color: #37766e;
  text-align: center;
  font-size: 24px;

  @media screen and (max-width: 550px) {
    font-size: 16px;
  }
`;

const Section = styled.div`
  text-align: center;
  font-size: 14px;
  color: gray;

  @media screen and (max-width: 550px) {
    font-size: 10px;
  }
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

  @media screen and (max-width: 550px) {
    width: 140px;
    height: 240px;

    &: hover {
      bottom: 10px;
      width: 170px;
      height: 270px;
      transition: 0.5s;
    }
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
  "세계를 순례하는 여행객들의 멋진 사진들을 살펴보며 좋은 여행이 주는 가치를 경험해보세요.";

const About = () => {
  return (
    <Background>
      <MainTitle>새롭고 멋진 여행지를 찾아보고, 경험을 공유하세요.</MainTitle>
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
