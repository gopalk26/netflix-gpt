import { logo_url } from "../Utils/constants";
import {  signOut } from "firebase/auth";
import {auth} from '../Utils/firebase';
import { useNavigate } from "react-router-dom";




const BrowserHeader = () => {
    const naviGate = useNavigate();
   

    const handleLogout = () => {

    
  
         
         signOut(auth).
         then(() => {
          // Sign-out successful.
           naviGate("/");
       

        }).catch((error) => {
          // An error happened.
         naviGate("/error");
        });
   
    };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-65 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-24 mr-4  ml-9" src={logo_url} alt="Netflix Logo" />
       
      </div>
      <div className="flex items-center">
        {/* Logout Button */}
        <button
          className="text-white text-sm px-4 py-2 rounded bg-red-600 hover:bg-red-700"
           onClick={handleLogout}
        >
           Sign Out
        </button>
      </div>
    </header>
  );
};

export default BrowserHeader;
