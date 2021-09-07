import React, { useState } from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 45rem;
  height: 30rem;
  padding: 30px;
  overflow: scroll;
  background: white;
  border-radius: 20px;
  text-align: center;
`;

const ImageCard = ({ image, modal }) => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <Background>
      <ModalContainer>
        <div>
          <img src={image.src} />
        </div>
        <div>이야</div>
      </ModalContainer>
    </Background>
  );
};

export default ImageCard;
