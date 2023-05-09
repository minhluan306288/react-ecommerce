import { iconDataGoogle } from "@Assets/icons";
import FormEmailPass from "@Components/FormEmailPass";
import { auth, provider } from "@Observer/ObFirebase";
import { signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { useState } from "react";
import { notFoundUser } from "../constants/messages";
import { Link } from 'react-router-dom'


export default function PageSignIn() {
  const [user, setUser] = useState(null);
  const [alertLogin, setAlertLogin] = useState();

  const onLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user", userCredential);
      })
      .catch((e) => {
        console.log(e.code);
        console.log(e.message);
        if (e.code === "auth/user-not-found") {
          setAlertLogin(notFoundUser);
          console.log("login error");
        }
      });
  };

  const handleGoogleSignIn = () => {
    // signInWithPopup(auth, provider)
    signInWithRedirect(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        console.log("errror");
        console.log(err);
      });
  };

  return (
    <section className="App w-full flex justify-center mt-7">
      <div className="w-full max-w-md">
        <div className="bg-slate-50 shadow-md rounded px-8 py-8 pt-8">
          <h2 className="text-lg font-medium text-center mb-4 text-blue-600">
            Sign In
          </h2>
          <FormEmailPass
            type={"Sign In"}
            onSubmit={onLogin}
            alertCallBack={alertLogin}
          />
          <button
            onClick={handleGoogleSignIn}
            className="flex mt-2 px-4 py-2 hover:bg-gray-100 border rounded item-center justify-between w-full"
          >
            <img src={iconDataGoogle} alt="sign in with google" />
            <span>Sign In With Google</span>
          </button>
          <Link className="text-center w-full block mt-3" to={'/sign-up'} >
            Sign Up
         </Link>
        </div>
      </div>
    </section>
  );
}
