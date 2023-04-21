import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBfvdbRno051tOa2SMHbekPoBjXCued03E",
  authDomain: "resume-react-a28a3.firebaseapp.com",
  projectId: "resume-react-a28a3",
  storageBucket: "resume-react-a28a3.appspot.com",
  messagingSenderId: "731268961654",
  appId: "1:731268961654:web:2e03657b036de4ff03d657",
  measurementId: "G-3S1BF1XQXG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
