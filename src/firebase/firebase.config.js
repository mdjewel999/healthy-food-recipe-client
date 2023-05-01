// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAH8-rOFs5ROJVIIotU70XoR1gCi8fpRo",
  authDomain: "healthy-food-recipe-302b2.firebaseapp.com",
  projectId: "healthy-food-recipe-302b2",
  storageBucket: "healthy-food-recipe-302b2.appspot.com",
  messagingSenderId: "242663385730",
  appId: "1:242663385730:web:f487016be44d80a7b0629b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;