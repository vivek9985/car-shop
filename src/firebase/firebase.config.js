// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWo7UYgKSLSpAQAV_XasWcUPRbe0N26VA",
  authDomain: "car-shop-auth-f4234.firebaseapp.com",
  projectId: "car-shop-auth-f4234",
  storageBucket: "car-shop-auth-f4234.appspot.com",
  messagingSenderId: "1036365058383",
  appId: "1:1036365058383:web:0d1a46a91c9c015d30f53a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;