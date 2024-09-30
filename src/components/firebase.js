//BASE CODE SOURCED FROM FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE5QvvgBaYnTfv-oW3wFquvDY021vHAZI",
  authDomain: "login-backend-f5bb2.firebaseapp.com",
  projectId: "login-backend-f5bb2",
  storageBucket: "login-backend-f5bb2.appspot.com",
  messagingSenderId: "276088493906",
  appId: "1:276088493906:web:89565e987aa4dc728c4c8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authorize=getAuth();
export const googleProvider = new GoogleAuthProvider(); 

export default app;