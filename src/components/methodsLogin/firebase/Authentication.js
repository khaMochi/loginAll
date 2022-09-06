// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJYd89E7nki7GisD-UiGXtDlfW3m8qB_g",
  authDomain: "button-82db5.firebaseapp.com",
  projectId: "button-82db5",
  storageBucket: "button-82db5.appspot.com",
  messagingSenderId: "49830983918",
  appId: "1:49830983918:web:1ffc7240458d92c6535bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const providerGoogle=new GoogleAuthProvider();
export const providerFacebook=new FacebookAuthProvider();
