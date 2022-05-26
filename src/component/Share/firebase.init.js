// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// require("dotenv").config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCFMrw5Szzntk1AJcKabpcnlr3jy3a0qhk",
    // authDomain: "assignment-12-5b625.firebaseapp.com",
    // projectId: "assignment-12-5b625",
    // storageBucket: "assignment-12-5b625.appspot.com",
    // messagingSenderId: "32036897454",
    // appId: "1:32036897454:web:4f1f7a604deb528af5e33f",

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
