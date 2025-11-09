// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext = createContext()

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const signInGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signOutUser=()=>{
        return signOut(auth)
    }
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false);

        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authData = {
        createUser,signInUser,user,setUser,loading,setLoading,signInGoogle,signOutUser,
    }

  return <AuthContext value={authData}>
    {children}
  </AuthContext>
}

export default AuthProvider