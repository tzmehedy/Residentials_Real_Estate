import React, { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const userLogin = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const userLoginWithGoogle = (provider) =>{
    return signInWithPopup(auth,provider)
  }

  const authInfo = {
    user,
    createUser,
    userLogin,
    userLoginWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
