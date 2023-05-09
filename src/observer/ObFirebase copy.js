// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_BASE_AUTHORIZED_DOMAIN,
  projectId: "phone-store-30efc",
  storageBucket: "phone-store-30efc.appspot.com",
  messagingSenderId: "659818652445",
  appId: "1:659818652445:web:4bfa9f5fbb247fff6377f4",
  measurementId: "G-8WXLJ2YF3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}
