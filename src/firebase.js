// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAS25ohqIhY3haEONfoHRCiFiL_8-R7lqg",
  authDomain: "challenge-e3ab9.firebaseapp.com",
  projectId: "challenge-e3ab9",
  storageBucket: "challenge-e3ab9.appspot.com",
  messagingSenderId: "69677067869",
  appId: "1:69677067869:web:b94a812896d6bbd1e167b4",
  measurementId: "G-J6BRYF5D4V",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
