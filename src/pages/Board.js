import { onSnapshot, query, collection, orderBy } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { getFirestore } from "@firebase/firestore";
import Texts from "./Texts";
import BoardForm from "./BoardForm";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Board = ({ userObj }) => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    const q = query(
      collection(getFirestore(), "texts"),
      orderBy("createAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const textArray = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setTexts(textArray);
      console.log(textArray);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container>
      <h2>여행지에 대한 경험을 남겨보세요.</h2>
      <section>
        <BoardForm userObj={userObj} />
      </section>
      <section>
        {texts.map((text) => (
          <Texts
            key={text.id}
            textObj={text}
            isOwner={text.createrId === userObj.uid}
          />
        ))}
      </section>
    </Container>
  );
};

export default Board;
