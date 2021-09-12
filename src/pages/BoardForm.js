import React, { useState } from "react";
import { dbService, storageService } from "../firebase";
import { collection } from "@firebase/firestore";
import { addDoc } from "@firebase/firestore";
import styled from "styled-components";
import { getDownloadURL, ref } from "@firebase/storage";
import { uploadString } from "@firebase/storage";
import { v4 as uuidv4, v4 } from "uuid";

const Container = styled.div`
  width: 40em;
  display: grid;
  grid-template-row: 2fr 1fr;
  margin-bottom: 30px;
  justify-content: center;
`;
const TextInput = styled.input`
  width: 35em;
  height: 40px;
  border-radius: 15px;
  border: 1px solid #dedede;
  padding: 0.5em 0.8em;

  @media screen and (max-width: 550px) {
    width: 20em;
    display: block;
    margin-bottom: 5px;
  }
`;

const Button = styled.input`
  border: none;
  border-radius: 15px;
  margin-left: 20px;
  background: #337c8e;
  color: white;
  width: 70px;
  height: 2em;

  &: hover {
    background: #479e91;
  }
`;

const FileButton = styled.button`
  margin-top: 10px;
  background: none;
  border: none;
`;

const BoardForm = ({ userObj }) => {
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState("");

  //파일
  const hiddenFileInput = React.useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };
  //onChange
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();

    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  //파일 삭제
  const onClearAttachment = () => setAttachment("");

  //onSubmit
  const onSubmit = async (e) => {
    if (text === "") {
      return;
    }
    e.preventDefault();
    let attachmentUrl = "";
    try {
      if (attachment !== "") {
        const fileRef = ref(storageService, `${userObj.uid}/${v4()}`);
        const response = await uploadString(fileRef, attachment, "data_url");
        attachmentUrl = await getDownloadURL(response.ref);
      }
      //텍스트 작성
      const docRef = await addDoc(collection(dbService, "texts"), {
        text: text,
        createAt: Date.now(),
        createrId: userObj.uid,
        attachmentUrl,
      });
      console.log("Document written with ID: ", docRef.id);

      //파일 첨부
    } catch (e) {
      console.log("Error adding document", e);
    }
    setText("");
    setAttachment("");
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
        <FileButton onClick={handleClick}>Upload a file..</FileButton>
        <input
          type="file"
          ref={hiddenFileInput}
          id="attach-file"
          accept="image/*"
          onChange={onFileChange}
          style={{ display: "none" }}
        />

        {attachment && (
          <>
            <img
              src={attachment}
              width="70"
              height="70"
              style={{ borderRadius: "50%", marginTop: "10px" }}
            />
            <div onClick={onClearAttachment}>
              <span style={{ fontSize: "12px" }}>Remove</span>
            </div>
          </>
        )}
      </form>
    </Container>
  );
};

export default BoardForm;
