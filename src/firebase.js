import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUyZc43B88m0hXd1vm8XG0LRJG2m4mjbw",
  authDomain: "clone-ea49e.firebaseapp.com",
  projectId: "clone-ea49e",
  storageBucket: "clone-ea49e.appspot.com",
  messagingSenderId: "409109882866",
  appId: "1:409109882866:web:c2b5d525124a0026d82d6b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
