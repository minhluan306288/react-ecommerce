import { Outlet, useNavigate, useResolvedPath } from "react-router-dom";
import MenuHeader from "@Layout/MenuHeader";
import Footer from "@Layout/Footer";
import firebase from 'firebase/compat/app';
import { useLayoutEffect, useState } from "react";
import {auth} from '@Observer/ObFirebase';
import { useDispatch } from "react-redux";
import { addAuthor } from "reduxSlice/slice";


export default function MainLayout(){
   const [isSignedIn, setIsSignedIn] = useState(false) 
   const {pathname} = useResolvedPath()
   const navigate = useNavigate()
   const dispatch = useDispatch();



   console.log('pathname', pathname);
   console.log('update code deploy');

   useLayoutEffect(() => {

      const unregisterAuthObserver = auth.onAuthStateChanged(async (user) => {
         setIsSignedIn(!!user);
         if(user){
            console.log('user', user);
            console.log('user', await user?.getIdToken());
            const {accessToken,displayName,email,phoneNumber,photoURL,uid} = user
            const action = addAuthor({accessToken,displayName,email,phoneNumber,photoURL,uid})
            dispatch(action)
         }
         // if(pathname !== '/sign-up' && pathname !== '/sign-in') navigate('/sign-in')
       });
       return () => unregisterAuthObserver();

      // if(pathname !== '/sign-in' && pathname !== '/sign-up'){
         
      // }
    },[]); 



   return (
      <>
         <header>
            <MenuHeader />
         </header>
         <main>
            <div className="mx-4">
               {/* {(isSignedIn || pathname ==='/sign-up' || pathname ==='/sign-in' ) && <Outlet />} */}
               <Outlet />
            </div>
         </main>
         <Footer />
      
      </>
   )
}