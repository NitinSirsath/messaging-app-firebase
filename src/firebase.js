// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChI7kwq35nUpO7UG1azRL4WXB5oXZKRhc",
  authDomain: "chat-firebase-83fc4.firebaseapp.com",
  projectId: "chat-firebase-83fc4",
  storageBucket: "chat-firebase-83fc4.appspot.com",
  messagingSenderId: "436977040680",
  appId: "1:436977040680:web:629111ededa2803a69a41d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
