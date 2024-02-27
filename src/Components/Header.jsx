import { logo_url } from "../Utils/constants";
import {auth} from '../Utils/firebase';
import { useNavigate } from "react-router-dom";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";


const Header = () => {
  const user = useSelector((store)=>store.user)
  const naviGate = useNavigate();
  const dispatch = useDispatch();

   

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


                  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      
        <img  className="w-48 "
        src={logo_url} alt="logo"
        />
     
        
         { user &&(<div className = "flex px-4 py-4">
        {/* Logout Button */}
        <button
          className="text-white text-sm px-3 py-2  rounded bg-red-600 hover:bg-red-700"
           onClick={handleLogout}
        >
           Sign Out
        </button>
      </div>)}

    </div>
    
  )
}

export default Header