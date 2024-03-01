import { SUPPORTED_LANGUAGES, logo_url } from "../Utils/constants";
import {auth} from '../Utils/firebase';
import { useNavigate } from "react-router-dom";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/gptSlice"; 
import { changeLanguage } from "../Utils/configSlice";


const Header = () => {
  const user = useSelector((store)=>store.user)
  const naviGate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

   

  const  handleLogout = () => {

    
  
         
    signOut(auth).
    then(() => {
     // Sign-out successful.
   }).catch((error) => {
    console.log(error);
     // An error happened.
    naviGate("/error");
   });

};


useEffect(()=>{
      
   const unsubscribe = onAuthStateChanged(auth, (user) => {
 if (user) {

     const {uid,email,displayName} = user;
     dispatch(addUser({uid:uid , email: email , displayName:displayName}))
     naviGate("/browser");

} else {
// User is signed out
   dispatch(removeUser());
   naviGate("/");
}
});
  return ()=>unsubscribe();
},[]);

const handleGptSearchClick = () => {
  // Toggle GPT Search
  dispatch(toggleGptSearchView());
};
const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value));
};

                  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      
        <img  className="w-48 "
        src={logo_url} alt="logo"
        />
     
        
     {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

         <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

        {/* Logout Button */}
        <button
          className="text-white text-sm py-2 px-4 mx-4 my-2 rounded bg-red-600 hover:bg-red-700"
           onClick={handleLogout}
        >
           Sign Out
        </button>
      </div>)}

    </div>
    
  )
}

export default  Header