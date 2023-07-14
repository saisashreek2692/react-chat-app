import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkFdoB-GSzsOvfUl8gm6awyEyQaGKUAgs",
  authDomain: "healthychats-a4842.firebaseapp.com",
  projectId: "healthychats-a4842",
  storageBucket: "healthychats-a4842.appspot.com",
  messagingSenderId: "919798307086",
  appId: "1:919798307086:web:5bc66035f835e2a78cdf5f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
