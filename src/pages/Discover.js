import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const ModalButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  position: absolute;
  top: 10%;
  left: 80%;

  @media (max-width: 902px) {
    left: 85%;
    top: 7%;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  max-height: 50rem;
  width: 550px;
  height: auto;
  padding: 30px;
  overflow: scroll;
  background: white;
  border-radius: 20px;
  text-align: center;

  @media (max-width: 902px) {
    height: 50%;
  }
`;

const Background = styled.div`
  text-align: center;
  margin-top: 10%;
`;
const Container = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // border: 1px solid red;

  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }

  @media screen and (min-width: 550px) and (max-width: 870px) {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
  }
`;

const PicBox = styled.div`
  text-align: center;
  // border: 1px solid blue;
  justify-items: center;
`;

const Location = styled.h5`
  position: relative;
  bottom: 40%;
  color: white;
  font-size: 17px;
  font-weight: 500;
`;

const Img = styled.img`
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.5);
`;

const Discover = () => {
  const [modalData, setModalData] = useState("");
  const [pics, setPics] = useState([]);
  const [modal, setModal] = useState(false);
  const clientId = "tIuczj1WWmW18XF0WhN7U9xec4qP2E_49X6vqv2J_JY";

  const getImages = async () => {
    await axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: clientId,
          count: 30,
          query: "wanderlust",
        },
      })
      .then((response) => {
        setPics(response.data);
        // console.log(response.data);
      });
  };

  const ModalOpen = (pics) => {
    setModal(true);
    console.log("click");
    setModalData(pics.target);
    console.log(pics.target);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Background>
      <h2>Discover Where You Want.</h2>
      <Container>
        {pics.map((image) => (
          <>
            <PicBox modal={modal} onClick={ModalOpen} key={image.id}>
              <Img src={image.urls.small} alt={image.description}></Img>
              <h4>{image.user.name}</h4>

              <Location>
                {image.location.title ? image.location.title : "anywhere"}
              </Location>
            </PicBox>
          </>
        ))}
      </Container>
      {modal ? (
        <ModalBackground>
          <ModalContainer>
            <div></div>
            <div>
              <img src={modalData.src} width="100%" height="100%"></img>
            </div>
            <ModalButton onClick={closeModal}>&times;</ModalButton>
          </ModalContainer>
        </ModalBackground>
      ) : null}
    </Background>
  );
};

export default Discover;
