import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAQuEUZiAK893CthaWyztjaEK1KcAGaXoU",
  authDomain: "tela-login-5b3c7.firebaseapp.com",
  projectId: "tela-login-5b3c7",
  storageBucket: "tela-login-5b3c7.firebasestorage.app",
  messagingSenderId: "336843795692",
  appId: "1:336843795692:web:a12ee42d22168054c8c9c9"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);