import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../utils/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  const welcomeUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then()
      .catch((error) => console.log(error));
  };

  const kickOutUser = () => {
    signOut(auth)
      .then(() => console.log("user kicked out successfully"))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    welcomeUser,
    kickOutUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
