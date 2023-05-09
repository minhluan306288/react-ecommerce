import { iconDataGoogle } from "@Assets/icons";
import { auth } from "@Observer/ObFirebase";
import FormEmailPass from "@Components/FormEmailPass";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { registerError } from "../constants/messages";
import { Link } from 'react-router-dom'

export default function PageSignUp() {
  const [alertSignUp, setAlertSignUp] = useState();
  const onSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user", userCredential);
      })
      .catch((e) => {
        console.log(e.code);
        console.log(e.message);
        if (e.code === "auth/user-not-found") {
          setAlertSignUp(registerError);
          console.log("login error");
        }
      });
  };

  const handleGoogleSignIn = () => {
    console.log("handleGoogleSignIn");
  };
  return (
    <section className="App w-full flex justify-center mt-7">
      <div className="w-full max-w-md">
        <div className="bg-slate-50 shadow-md rounded px-8 py-8 pt-8">
          <h2 className="text-lg font-medium text-center mb-4 text-blue-600">
            Sign Up
          </h2>
          <FormEmailPass type={"Sign Up"} onSubmit={onSignUp} alertCallBack={alertSignUp}/>
          <button
            onClick={handleGoogleSignIn}
            className="flex mt-2 px-4 py-2 hover:bg-gray-100 border rounded item-center justify-between w-full"
          >
            <img src={iconDataGoogle} alt="sign in with google" />
            <span>Sign In With Google</span>
          </button>
          <Link className="text-center w-full block mt-3" to={'/sign-in'} >
            Sign In
         </Link>
        </div>
       </div>
    </section>
  );
}
