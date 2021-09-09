import React from "react";
import styled from "styled-components";

const Text = styled.div`
  border: 1px solid gray;
  width: 300px;
  border-radius: 40px;
  font-size: 14px;
  margin-top: 10px;
`;

const Texts = ({ textObj }) => {
  return (
    <Text>
      <h4>{textObj.text}</h4>
    </Text>
  );
};

export default Texts;
