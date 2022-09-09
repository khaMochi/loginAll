// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsktm3GKRuqMn71zFBzMJ-_LW9mF6isyc",
  authDomain: "facebooktest-104f9.firebaseapp.com",
  projectId: "facebooktest-104f9",
  storageBucket: "facebooktest-104f9.appspot.com",
  messagingSenderId: "959133484799",
  appId: "1:959133484799:web:adf181d5c39a4d7ebaeeca",
  measurementId: "G-5RP9NZCCP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const providerGoogle=new GoogleAuthProvider();
export const providerFacebook=new FacebookAuthProvider();
