import React, { useState } from "react";
import styled from "styled-components";
import { updateDoc, deleteDoc, doc } from "@firebase/firestore";
import { dbService } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
const Text = styled.div`
  border: 1px solid #c8cacb;
  width: 300px;
  border-radius: 40px;
  font-size: 14px;
  margin-top: 10px;
`;

const TextInput = styled.input`
  width: 30em;
  height: 40px;
  border-radius: 15px;
  border: none;
  border: 1px solid #dedede;
  padding: 0.5em 0.8em;
`;

const Button = styled.input`
  border: none;
  border-radius: 15px;
  margin-left: 20px;
  background: #ededee;
  color: black;
  width: 70px;
  height: 2em;

  &: hover {
    background: #dbdcdc;
  }
`;

const Cancel = styled.button`
  border: none;
  border-radius: 15px;
  margin-left: 20px;
  background: #ededee;
  color: black;
  width: 80px;
  height: 2em;
  font-size: 13px;
  margin: 3px;

  &: hover {
    background: #dbdcdc;
  }
`;

const Content = styled.h4`
  font-size: 13px;
  font-weight: 400;
`;

const Texts = ({ textObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(textObj.text);

  const onUpdateClick = () => {
    setEditing((prev) => !prev);
  };

  const onDeleteClick = async () => {
    const ok = window.confirm("글을 삭제하시겠습니까?");
    if (ok) {
      await deleteDoc(doc(dbService, `texts/${textObj.id}`));
    }
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewText(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(dbService, `texts/${textObj.id}`), {
      text: newText,
    });
    setEditing(false);
  };
  return (
    <div>
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit}>
                <TextInput
                  type="text"
                  onChange={onChange}
                  value={newText}
                  autoFocus
                  required
                />
                <Button type="submit" value="update" />
                <Cancel onClick={onUpdateClick}>cancel</Cancel>
              </form>
            </>
          )}
        </>
      ) : (
        <>
          <Text>
            <Content>{textObj.text}</Content>
            <span onClick={onDeleteClick}>
              <FontAwesomeIcon
                icon={faTrashAlt}
                style={{ marginRight: "10", marginBottom: "5" }}
              />
            </span>
            <span onClick={onUpdateClick}>
              <FontAwesomeIcon
                icon={faPencilAlt}
                style={{ marginRight: "10", marginBottom: "5" }}
              />
            </span>
          </Text>
        </>
      )}
    </div>
  );
};

export default Texts;
