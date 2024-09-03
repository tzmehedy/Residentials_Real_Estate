import React, { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const userLogin = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const authInfo = {
    user,
    createUser,
    userLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
