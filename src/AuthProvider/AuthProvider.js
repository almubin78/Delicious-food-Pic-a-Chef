import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

//crating some variable

export const VarContext = createContext();
const auth = getAuth(app)

//main function is started from here.... 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    // helping variable
    const [loading,setLoading] = useState(true);

    //create user
    const registerWithEmailAndPass = (email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    //update user
    const updateUser = (userInfo) =>{
        
        return updateProfile(auth.currentUser, userInfo);
    }
    //Login with email and password
    const loginWithEmailAndPass = (email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass)
    }


    //sending value for creating functions
    const info ={
        registerWithEmailAndPass,
        updateUser,
        loginWithEmailAndPass,
        loading,
        user
    }
    return (
        <VarContext.Provider value={info}>
            {children}
        </VarContext.Provider>
    );
};

export default AuthProvider;