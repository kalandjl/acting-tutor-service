
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCcJXHOgbnM-iGs_HeTamaoRMMOv5cJZzg",

  authDomain: "acting-tutoring-service.firebaseapp.com",

  projectId: "acting-tutoring-service",

  storageBucket: "acting-tutoring-service.firebasestorage.app",

  messagingSenderId: "1041796714673",

  appId: "1:1041796714673:web:07cbd4f11de0d4eb4f5290",

  measurementId: "G-3CS9QLSNS4"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const functions = getFunctions(app);