// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSbBWGfhZrL83rZ9AGG42FXxwwp7Y_pQs",
  authDomain: "gonzaga-marketplace.firebaseapp.com",
  projectId: "gonzaga-marketplace",
  storageBucket: "gonzaga-marketplace.firebasestorage.app",
  messagingSenderId: "428303963772",
  appId: "1:428303963772:web:e6db50e6a560036411dbf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);