// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk7hTFRovdMI2oTEwz8MWRyh08hpi6FjA",
  authDomain: "buznexapp.firebaseapp.com",
  databaseURL: "https://buznexapp-default-rtdb.firebaseio.com",
  projectId: "buznexapp",
  storageBucket: "buznexapp.appspot.com",
  messagingSenderId: "686205171440",
  appId: "1:686205171440:web:40209dd4a63923f164f435"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
export const app = getFirestore(db)