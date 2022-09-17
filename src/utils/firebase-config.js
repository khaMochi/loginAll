import { initializeApp } from 'firebase/app';
import {ApiLoginSocial} from '../api/UserApi';
import {getMessaging, onMessage} from "firebase/messaging";
import {getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider , signInWithPopup,} from 'firebase/auth';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

const auth = getAuth (app);
const providerGoogle = new GoogleAuthProvider ();
const providerFacebook = new FacebookAuthProvider ();
const providerApple = new OAuthProvider('apple.com');
/**
 * 
 * @param  auth 
 * @param  provider 
 * @param  type 
 * @returns {Promise<AxiosResponse<any>>}
 * @constructor
 */
const contructorMethodLogin = async (auth, provider, type) => {
   try {
    const data = await signInWithPopup (auth,provider);//response from firbase
    const responseFromServer = await ApiLoginSocial (type, data.user);
      return responseFromServer;
   }
   catch (err) {
      return null ;
     // lỗi ngoại lệ 
    }
 }

 /**
 * @returns {Promise<AxiosResponse<any>>}
 */
 export const googleLoginMethod =  () => contructorMethodLogin (auth, providerGoogle, 'google');
 export const facebookLoginMethod = () => contructorMethodLogin (auth, providerFacebook, 'facebook');
 export const appleLoginMethod = () => contructorMethodLogin (auth, providerApple, 'apple');