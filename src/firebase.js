import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAx15RVh97nSsf9DeoU8V1WTKwM4gNYvOs",
  authDomain: "clone-2414c.firebaseapp.com",
  databaseURL: "https://clone-2414c.firebaseio.com",
  projectId: "clone-2414c",
  storageBucket: "clone-2414c.appspot.com",
  messagingSenderId: "213943923182",
  appId: "1:213943923182:web:f4a16c470fdc0a9b21deff",
  measurementId: "G-VQEKF2THSZ"
});


const auth = firebase.auth();

export { auth };
