import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const providerForGoogle = new GoogleAuthProvider();

const providerForGithub = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

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

  const logOut=()=>{
    return signOut(auth)
  }

  const updateProfileInfo = (newProfileName,newPhotoURL) => {
    setLoading(false)
    return updateProfile(auth.currentUser, {
      displayName: `${newProfileName}`,
      photoURL: `${newPhotoURL}`,
    });
  };

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setLoading(false)
      setUser(currentUser)
    })
    return ()=>{
      unSubscribe()
    }
  },[])


  const authInfo = {
    user,
    loading,
    logOut,
    createUser,
    userLogin,
    userLoginWithGoogle,
    userLoginWithGithub,
    updateProfileInfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
