import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDLkTmnnAs2zZWlgnhiKBpv9YSiv_tH6Ug",
    authDomain: "dummy1-84c3c.firebaseapp.com",
    projectId: "dummy1-84c3c",
    storageBucket: "dummy1-84c3c.appspot.com",
    messagingSenderId: "6364136252",
    appId: "1:6364136252:web:0c8a77d22ec2ee2846d439"
  };

  firebase.initializeApp(firebaseConfig);
  export const storage = firebase.storage();
  const auth = firebase.auth();
  const RecaptchaVerifier = firebase.auth();
  const signInWithPhoneNumber = firebase.auth();
  const getAuth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const Fprovider = new firebase.auth.FacebookAuthProvider();
  export {
    auth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    getAuth,
    provider,
    Fprovider,
    firebase,
  };
  