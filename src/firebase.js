// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAznjpdWM_NGq_l5yhChLmSJkMRHyoJtok",
  authDomain: "dsfsdf2324-11620.firebaseapp.com",
  projectId: "dsfsdf2324-11620",
  storageBucket: "dsfsdf2324-11620.appspot.com",
  messagingSenderId: "137769548892",
  appId: "1:137769548892:web:3a1351826ab0fac85c7a99",
  measurementId: "G-WCJ5XL8V8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
