import React, { useState } from "react";
import { initializeApp } from "@firebase/app";
import { firebaseConfig } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
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
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};
export default Login;
