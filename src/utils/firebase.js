import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
import HomePage from "../routes/HomePage";
import {Link, Navigate, Route} from 'react-router-dom'

const firebaseConfig = {
    apiKey: "AIzaSyCl8lGfoVFtKT04LbwguLV7H2dEpLi9Wnc",
    authDomain: "deakin-web-app-da88a.firebaseapp.com",
    projectId: "deakin-web-app-da88a",
    storageBucket: "deakin-web-app-da88a.appspot.com",
    messagingSenderId: "67073130104",
    appId: "1:67073130104:web:2963776cd97b627e01b78d"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
        prompt:"select_account"
    });

    export const auth = getAuth();
    export const signInWithGooglePopup= () => signInWithPopup(auth, provider);
    export const db = getFirestore();



    
    //creates user
    export const createUserDocFromAuth= async(userAuth, additionalInformation ={}) =>{
        if (!userAuth.email) return;
        const userDocRef = doc (db, 'users', userAuth.uid);

        const userSnapshot= await getDoc(userDocRef);

    //checks if already existant
        if (! userSnapshot.exists()){
            const {firstName , lastName, email}= userAuth;
            const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
            firstName,
            lastName,
            email,
            createdAt,
            ...additionalInformation
        })
    }
        catch(error){
        console.log('error in creating user', error.message)
        }
    }

return userDocRef;

    }


    
    //createsuser
    export const createAuthUserWithEmailAndPassword = async (email, password)=>{
        if (!email || !password) return;
       return await createUserWithEmailAndPassword(auth, email, password)
    }

        //signinwithemailpw
    export const signInAuthWithEmailAndPassword = async (email, password)=>{
        if (!email || !password) return;
       return await signInWithEmailAndPassword(auth, email, password)
    }

