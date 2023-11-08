import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password)=>{
        setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password)
       }

        //SignIn

   const signInUser = (email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   //google signIn

   const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
   }

   //logOut

   const logOut = () =>{
    setLoading(true)
    return signOut(auth)
   }
   //authCahnge
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
       setUser(currentUser);
       setLoading(false)
      
    });
    return ()=>{
        unSubscribe();
    }
   },[])
    const info = {
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        signInWithGoogle,
    } 
    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;