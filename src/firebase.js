import firebase from 'firebase';
require('dotenv').config();
console.log(process.env.REACT_APP_FIREBASE_API);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "clone-1903b.firebaseapp.com",
  databaseURL: "https://clone-1903b.firebaseio.com",
  projectId: "clone-1903b",
  storageBucket: "clone-1903b.appspot.com",
  messagingSenderId: "850392222978",
  appId: "1:850392222978:web:16f8abac7301517b27861b",
  measurementId: "G-YFE6VJBHQR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

const auth = firebase.auth();

export {db,auth};
