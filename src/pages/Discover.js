import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ImageCard from "./ImageCard";

const Background = styled.div`
  margin-top: 10%;
`;
const Container = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // border: 1px solid red;

  @media (max-width: 600px) {
    border: 1px solid red;
  }
  @media (max-width: 902px) {
    border: 1px solid blue;
  }
`;

const PicBox = styled.div`
  text-align: center;
  // border: 1px solid blue;
  justify-items: center;
`;

const Discover = () => {
  const [image, setImage] = useState("");
  const [pics, setPics] = useState([]);
  const [modal, setModal] = useState(false);
  const clientId = "fThk0qnqDvaxXfXN87YljOp57a-H6YIVmrzgvYC70fY";

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

  const ModalOpen = () => {
    setModal(true);
    console.log("click");
    console.log(modal);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <Background>
      <Container>
        {pics.map((image) => (
          <>
            <PicBox
              modal={modal}
              onClick={(event) => {
                setModal(true);
                setImage(event.target);
              }}
            >
              <img src={image.urls.small}></img>
              <h4>{image.user.name}</h4>
              <h5>
                {image.location.title ? image.location.title : "anywhere"}
              </h5>
            </PicBox>
          </>
        ))}
      </Container>
      {modal ? <ImageCard image={image} modal={modal} /> : null}
    </Background>
  );
};

export default Discover;
