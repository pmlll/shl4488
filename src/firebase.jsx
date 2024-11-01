// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBpP3NKtHXyZrERTdZd-O23R0h8LFSxe18",
    authDomain: "shl4488.firebaseapp.com",
    projectId: "shl4488",
    storageBucket: "shl4488.firebasestorage.app",
    messagingSenderId: "521041975533",
    appId: "1:521041975533:web:6e88c610b96bdea32914e4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
