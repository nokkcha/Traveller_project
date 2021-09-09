import React, { useState } from "react";
import { dbService } from "../firebase";
import { collection } from "@firebase/firestore";
import { addDoc } from "@firebase/firestore";
import styled from "styled-components";

const Container = styled.div`
  width: 31em;
  display: grid;
  grid-template-row: 2fr 1fr;
  justify-items: baseline;
  margin-bottom: 30px;
`;
const TextInput = styled.input`
  width: 30em;
  height: 40px;
  border-radius: 15px;
  border: 1px solid #dedede;
`;

const Button = styled.input`
  border: none;
  border-radius: 15px;
  margin-left: 20px;
  background: #349386;
  color: white;
  width: 70px;
  height: 2em;

  &: hover {
    background: #479e91;
  }
`;

const BoardForm = ({ userObj }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const onSubmit = async (e) => {
    if (text === "") {
      return;
    }
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "texts"), {
        text: text,
        createAt: Date.now(),
        createrId: userObj.uid,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document", e);
    }
    setText("");
  };
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <TextInput
          type="text"
          value={text}
          onChange={onChange}
          maxLength={120}
        />
        <Button type="submit" value="write" />
      </form>
    </Container>
  );
};

export default BoardForm;
