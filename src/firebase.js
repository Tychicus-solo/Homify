// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOUwfF3LME9s9mzC4OzWa57W0PbLCrFd4",
  authDomain: "homify-404ec.firebaseapp.com",
  projectId: "homify-404ec",
  storageBucket: "homify-404ec.appspot.com",
  messagingSenderId: "391233127796",
  appId: "1:391233127796:web:3faac6edcacab1248bd821",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
