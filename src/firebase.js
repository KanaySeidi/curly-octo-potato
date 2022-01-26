// Import the functions you need from the SDKs you need
import { appendOwnerState } from "@mui/material";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxsRUaPjLZYIuODoWBaxxl1QnUdMOoPq0",
  authDomain: "exoticanimalstore-50973.firebaseapp.com",
  projectId: "exoticanimalstore-50973",
  storageBucket: "exoticanimalstore-50973.appspot.com",
  messagingSenderId: "493450196249",
  appId: "1:493450196249:web:2becd607df209b2b730188",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
