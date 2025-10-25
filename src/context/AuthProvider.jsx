import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../utils/firebase.config";

export const AuthContext = createContext();

const gProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      
  };

  const kickOutUser = () => {
    return signOut(auth)
      .then(() => console.log("user kicked out successfully"))
      .catch((error) => console.log(error.code));
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, gProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    kickOutUser,
    loading,
    setLoading,
    googleSignIn,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
