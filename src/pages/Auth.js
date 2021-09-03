import React, { useState } from "react";
import { initializeApp } from "@firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { firebaseConfig } from "../firebase";
import { useHistory } from "react-router-dom";

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
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email.."
          onChange={onChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password.."
          onChange={onChange}
          value={password}
        />
        <input type="submit" value="가입하기" />
        {error && <div>{error}</div>}
      </form>
    </>
  );
};

export default Auth;
