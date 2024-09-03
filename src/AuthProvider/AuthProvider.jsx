import React, { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const providerForGoogle = new GoogleAuthProvider();

const providerForGithub = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const userLogin = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const userLoginWithGoogle = () =>{
    return signInWithPopup(auth,providerForGoogle)
  }

  const userLoginWithGithub = () =>{
    return signInWithPopup(auth, providerForGithub)
  }

  const authInfo = {
    user,
    createUser,
    userLogin,
    userLoginWithGoogle,
    userLoginWithGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
