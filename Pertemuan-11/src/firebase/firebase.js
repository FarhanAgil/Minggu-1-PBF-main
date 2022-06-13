import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-gKiU2bOz2CKx1KBRp0HXopC-jVY6lXA",
  authDomain: "pertemuan-11-f72b4.firebaseapp.com",
  projectId: "pertemuan-11-f72b4",
  storageBucket: "pertemuan-11-f72b4.appspot.com",
  messagingSenderId: "1024632241055",
  appId: "1:1024632241055:web:25a1e563e5cb1ae3df5baa"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;