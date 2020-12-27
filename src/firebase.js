import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASC80fFkMEhmoJlQ-cU1lC6Bc18e-n3Rk",
  authDomain: "reactjs-54304.firebaseapp.com",
  projectId: "reactjs-54304",
  storageBucket: "reactjs-54304.appspot.com",
  messagingSenderId: "620437448218",
  appId: "1:620437448218:web:a3f9b7dd474f9a011653a3",
  measurementId: "G-89KGMPV8FX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };