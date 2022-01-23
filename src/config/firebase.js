import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";

import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5wW5l0Rxp3FesHFWmV6cHGZvJT00l5WM",
  authDomain: "mini-olxapp-c7cec.firebaseapp.com",
  projectId: "mini-olxapp-c7cec",
  storageBucket: "mini-olxapp-c7cec.appspot.com",
  messagingSenderId: "408736445634",
  appId: "1:408736445634:web:9ca36d1ceed160c738775b",
  measurementId: "G-ZCMX3PGMWJ"
};

const app = initializeApp(firebaseConfig);


const storage = getStorage();
const auth = getAuth();
const db = getFirestore();


export {
  auth,
  storage,
  db
}