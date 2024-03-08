// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    // apiKey: "AIzaSyDlFL7N-CoDapOtTlIMtIspwy0I-zTyA9c",
    authDomain: "mern-project-e701c.firebaseapp.com",
    projectId: "mern-project-e701c",
    storageBucket: "mern-project-e701c.appspot.com",
    messagingSenderId: "23833565828",
    appId: "1:23833565828:web:7914bb8b970822919600d1"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);