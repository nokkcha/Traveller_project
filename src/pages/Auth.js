import React, { useState } from "react";
import { initializeApp } from "@firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { firebaseConfig } from "../firebase";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15%;
`;

const Container = styled.div`
  width: 371px;
  height: 500px;
  margin-top: 50px;
`;

const SignInput = styled.input`
  border: 1px solid #dedede;
  width: 320px;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 0.2em 0.8em;

  ::-webkit-input-placeholder {
    color: #dedede;
    padding-left: 15px;
  }
`;

const SignBtn = styled.input`
  border: none;
  width: 345px;
  height: 50px;
  border-radius: 5px;
  background: #4d95a3;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      initializeApp(firebaseConfig);
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      history.push("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Background>
      <Container>
        <h2>회원가입</h2>
        <h5>여행에 목 마를땐, 트래블러</h5>
        <form onSubmit={onSubmit}>
          <div>이메일</div>
          <SignInput
            type="text"
            name="email"
            placeholder="example@traveller.com"
            onChange={onChange}
            value={email}
          />
          <div>비밀번호</div>
          <SignInput
            type="password"
            name="password"
            placeholder="type password"
            onChange={onChange}
            value={password}
          />
          <SignBtn type="submit" value="가입하기" />
          {error && <div>{error}</div>}
        </form>
      </Container>
    </Background>
  );
};

export default Auth;
