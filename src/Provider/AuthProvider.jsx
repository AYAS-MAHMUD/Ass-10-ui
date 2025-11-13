// import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from 'firebase/auth';
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
    const passwordReset=(email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateprofile = (name,url)=>{
        updateProfile(auth.currentUser,{
            displayName : name,
            photoURL : url
        })
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
        createUser,signInUser,user,setUser,loading,setLoading,signInGoogle,signOutUser,updateprofile,passwordReset,
    }

  return <AuthContext value={authData}>
    {children}
  </AuthContext>
}

export default AuthProvider