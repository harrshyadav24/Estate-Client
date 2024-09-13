// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-a86db.firebaseapp.com",
  projectId: "estate-a86db",
  storageBucket: "estate-a86db.appspot.com",
  messagingSenderId: "14082930270",
  appId: "1:14082930270:web:40fbc4c0348ab253a726cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);