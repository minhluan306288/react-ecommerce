import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
  authDomain: process.env.REACT_APP_FIRE_BASE_AUTHORIZED_DOMAIN,
  projectId: "phone-store-30efc",
  storageBucket: "phone-store-30efc.appspot.com",
  messagingSenderId: "659818652445",
  appId: "1:659818652445:web:4bfa9f5fbb247fff6377f4",
  measurementId: "G-8WXLJ2YF3T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}
