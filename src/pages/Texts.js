import React, { useState } from "react";
import styled from "styled-components";
import { updateDoc, deleteDoc, doc } from "@firebase/firestore";
import { dbService } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  width: 40em;
  margin: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  border: 1px solid #c8cacb;
  width: 500px;
  height: 50px;
  border-radius: 40px;
  font-size: 14px;
  margin-top: 10px;
  justify-content: end;
  display: flex;
  justify-content: center;
  align-items: baseline;

  .udButton {
    color: white;
  }

  &: hover {
    .udButton {
      color: #c8cacb;
      transition: 0.2s;
    }
  }

  @media screen and (max-width: 550px) {
    width: 400px;
  }
`;

const UpdateInput = styled.input`
  width: 30em;
  height: 40px;
  border-radius: 15px;
  border: none;
  border: 1px solid #dedede;
  padding: 0.5em 0.8em;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.3);
  margin-bottom: 20px;
  border-radius: 30%;
`;

const Button = styled.input`
  border: none;
  border-radius: 15px;
  margin-left: 20px;
  background: #ededee;
  color: black;
  width: 70px;
  height: 2em;
  justify-items: start;

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
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  flex-basis: 400px;
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
                <UpdateInput
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
          <Container>
            {textObj.attachmentUrl && <Img src={textObj.attachmentUrl} />}
            <Text>
              <Content>{textObj.text}</Content>

              {isOwner && (
                <>
                  <span onClick={onDeleteClick} className="udButton">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      style={{ marginRight: "10", marginBottom: "5" }}
                    />
                  </span>
                  <span onClick={onUpdateClick} className="udButton">
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      style={{ marginRight: "10", marginBottom: "5" }}
                    />
                  </span>
                </>
              )}
            </Text>
          </Container>
        </>
      )}
    </div>
  );
};

export default Texts;
