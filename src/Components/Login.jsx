import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from '../Utils/validation';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [message, setMessage] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const toggleSignForm = () => {
        setIsSignIn(!isSignIn);
        setMessage(null);
    };

    const handleButtonClick = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Client-side validation
        const validationMessage = checkValidation(email, password);
        if (validationMessage) {
            setMessage(validationMessage);
            return;
        }

        // Clear any previous error messages
        setMessage(null);

        // Here you can simulate authentication without backend
        if (isSignIn) {
            // Simulate successful sign-in
            alert("Sign in successful!"); // Replace with actual actions like redirecting to a dashboard
        } else {
            // Simulate successful sign-up
            alert("Sign up successful!"); // Replace with actual actions like redirecting to a welcome page
        }

        // Clear input fields after form submission
        emailRef.current.value = '';
        passwordRef.current.value = '';
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="image" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-75 rounded-lg">
                <h1 className="font-bold text-3xl py-5 text-pink-700 font-sans">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignIn && <input type="text" placeholder="Enter The Name" className="p-3 my-4 w-full font-sans rounded-lg border-2  border-rose-950 bg-transparent text-white focus:outline-none focus:border-gray-700" />
                }
                <input ref={emailRef} type="text" placeholder="Enter The Email" className="p-3 my-4 w-full font-sans rounded-lg border-2  border-rose-950 bg-transparent text-white focus:outline-none focus:border-gray-700" />
                <input ref={passwordRef} type="password" placeholder="Enter The Password" className="p-3 my-4 w-full font-sans rounded-lg border-2 border-rose-950 bg-transparent text-white focus:outline-none focus:border-gray-700" />
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
