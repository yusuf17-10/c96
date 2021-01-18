import * as firebase from "firebase";
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyBU014-l-_6WjpMtFkrVytNBpGxjnjxfDM",
    authDomain: "wateralarm-1a782.firebaseapp.com",
    projectId: "wateralarm-1a782",
    storageBucket: "wateralarm-1a782.appspot.com",
    messagingSenderId: "1030813531995",
    appId: "1:1030813531995:web:c0c93cca38d725e514647e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()