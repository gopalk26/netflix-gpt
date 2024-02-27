import { useRef, useState } from "react";
import Header from "./Header";
import { background_url } from "../Utils/constants";
import { checkValidation } from '../Utils/validation';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from '../Utils/firebase';

import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [message, setMessage] = useState(null);
   
    const nameRef  = useRef(null);
    const emailRef = useRef(null);
     const passwordRef = useRef(null);

    
    const dispatch = useDispatch();

    const toggleSignForm = () => {
        setIsSignIn(!isSignIn);
        setMessage(null);
    };

    const handleButtonClick = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const name =  nameRef.current.value;

        // Client-side validation
        const validationMessage = checkValidation(email, password);
        setMessage(validationMessage);
        if(validationMessage) return;
          
        // Sign In and Sign Up logic

        if(!isSignIn){
            // sign up logic
            const name =  nameRef.current.value;

           createUserWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
           // Signed up 
             const user = userCredential.user;
               updateProfile(user, {
                displayName: name
              }).then(() => {
                // Profile updated!
                const {uid,email,displayName} = auth.currentUser;
             dispatch(addUser({uid:uid , email: email , displayName:displayName}))
               
                  
              }).catch((error) => {
                // An error occurred
                // ...
              });
              
            
            // ...
            })
             .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setMessage(errorMessage);
              // ..
        });

        }
        else{
            // Sign In Logic

            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;

              
             
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setMessage(errorMessage);
            });
            
          

             
        }
       
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src= {background_url  } alt="image" />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
             className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-75 rounded-lg">
             
             <h1 className="font-bold text-3xl py-5 text-pink-700 font-sans">{isSignIn ? "Sign In" : "Sign Up"}</h1>
               
                {
                    !isSignIn && <input ref ={nameRef } type="text" placeholder="Enter The Name" className="p-3 my-4 w-full font-sans rounded-lg border-2  border-rose-950 bg-transparent text-white focus:outline-none focus:border-gray-700" />
                }
                <input ref={emailRef} type="text" 
                placeholder="Enter The Email" 
                className="p-3 my-4 w-full font-sans rounded-lg border-2  border-rose-950 bg-transparent text-white focus:outline-none focus:border-gray-700" />
                
                <input ref={passwordRef} type="password"
                 placeholder="Enter The Password"
                 className="p-3 my-4 w-full font-sans rounded-lg border-2 border-rose-950 bg-transparent text-white focus:outline-none focus:border-gray-700" />
                
                <button className="p-3 my-4 bg-rose-600 w-full rounded-lg text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-rose-600" onClick={handleButtonClick}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>

                <p className="text-red-600">{message}</p>

                <p className="py-4 text-white font-normal cursor-pointer" onClick={toggleSignForm}>
                    {isSignIn ? "New to Netflix ? Sign Up Now" : "Already Registered Login"}
                </p>

            </form>
        </div>
    );
};

export default Login;