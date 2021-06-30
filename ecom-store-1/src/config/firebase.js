import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCPPmdsvvW_xc54f1ygIBLCWujDbWQpP2A",
    authDomain: "ecom-store-2021.firebaseapp.com",
    projectId: "ecom-store-2021",
    storageBucket: "ecom-store-2021.appspot.com",
    messagingSenderId: "480549882193",
    appId: "1:480549882193:web:dcd51d0fe01e4478b5eb70",
    measurementId: "G-E3HV1XRSH4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };