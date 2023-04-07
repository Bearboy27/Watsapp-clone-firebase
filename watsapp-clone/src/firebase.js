import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAisiEAjD3MYzCSwSuQfNAZTFuSg08ceA4",
  authDomain: "watsapp-clone-a6a69.firebaseapp.com",
  projectId: "watsapp-clone-a6a69",
  storageBucket: "watsapp-clone-a6a69.appspot.com",
  messagingSenderId: "38980659389",
  appId: "1:38980659389:web:be3dbd3c3108bd4b336fd4",
  measurementId: "G-9PBG3E1LZC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
