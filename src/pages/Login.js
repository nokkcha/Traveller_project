import React, { useState } from "react";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 371px;
  height: 500px;
  margin-top: 50px;
`;

const ToSignIn = styled.div`
  font-size: 15px;
  color: gray;
  margin-top: 10px;
  text-align: center;
  width: 320px;
`;

const LoginInput = styled.input`
  border: 1px solid #dedede;
  width: 320px;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 20px;

  ::-webkit-input-placeholder {
    color: #dedede;
    padding-left: 15px;
  }
`;
const LoginBtn = styled.input`
  border: none;
  width: 320px;
  height: 50px;
  border-radius: 5px;
  background: #4d95a3;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

const Login = () => {
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
      let data;
      initializeApp(firebaseConfig);
      const auth = getAuth();
      data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data);
      history.push("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Background>
      <Container>
        <h2>Traveller</h2>
        <form onSubmit={onSubmit}>
          <LoginInput
            type="text"
            name="email"
            placeholder="이메일 입력"
            onChange={onChange}
            value={email}
          />
          <LoginInput
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={password}
          />
          <LoginBtn type="submit" value="로그인" />
          <Link to="/join">
            <ToSignIn>회원가입</ToSignIn>
          </Link>
          <span>{error}</span>
        </form>
      </Container>
    </Background>
  );
};
export default Login;
