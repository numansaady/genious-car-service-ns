// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzyOSAHcf9vtnoZf1aBl2BlRz0jwAU5i8",
  authDomain: "genious-car-service-ns.firebaseapp.com",
  projectId: "genious-car-service-ns",
  storageBucket: "genious-car-service-ns.appspot.com",
  messagingSenderId: "713079734552",
  appId: "1:713079734552:web:6d750dcf96afa2af8fde6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 