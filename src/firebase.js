import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqp7v0GQl_USrfwLuW5GRsSi6vxtbdHdg",
    authDomain: "whats-app-clone-ddc62.firebaseapp.com",
    projectId: "whats-app-clone-ddc62",
    storageBucket: "whats-app-clone-ddc62.appspot.com",
    messagingSenderId: "322930281656",
    appId: "1:322930281656:web:5ecc58aeb4393d42f7b84d",
    measurementId: "G-X0WLHQSBLJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;