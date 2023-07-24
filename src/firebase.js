import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB52QUWQd6JyvlTCSRAfYr-bEDjA8R-L7A",
  authDomain: "react-burger-builder-22fc9.firebaseapp.com",
  projectId: "react-burger-builder-22fc9",
  storageBucket: "react-burger-builder-22fc9.appspot.com",
  messagingSenderId: "5335710799",
  appId: "1:5335710799:web:0626e5caf91b675c03fe3a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
