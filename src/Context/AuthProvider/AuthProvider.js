import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser= (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signOutUser = () =>{
        return signOut(auth);
    };
    const userUpdateProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };
    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const authInfo ={
        user,
        createUser,
        signInUser,
        signOutUser,
        userUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;