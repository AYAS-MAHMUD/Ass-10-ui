// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAedaRpNBdECJk4IFLGOehFkGbSimkcEDo",
  authDomain: "homehero-1053d.firebaseapp.com",
  projectId: "homehero-1053d",
  storageBucket: "homehero-1053d.firebasestorage.app",
  messagingSenderId: "334001662295",
  appId: "1:334001662295:web:e03cd5bf85de928e7bb612"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export {app,auth};