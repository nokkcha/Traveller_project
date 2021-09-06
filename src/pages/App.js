import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import Routes from "../routes/Routes";
import "../assets/App.css";

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //관찰자
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          uid: user.uid,
        });
      } else {
        setIsLoggedIn(false);
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <Routes isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        "Initializing....."
      )}
    </>
  );
};
export default App;
