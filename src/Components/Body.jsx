import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browser from "./Browser"
import Login from "./Login"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {onAuthStateChanged } from "firebase/auth";
import {auth} from '../Utils/firebase';
import { addUser, removeUser } from "../Utils/userSlice";



const Body = () => {

  const dispatch = useDispatch();
    
    const appRouter = createBrowserRouter([
        {
             path:"/",
             element:<Login/>

        },
        {
            path:"browser",
            element:<Browser/>
        }
    ])

    useEffect(()=>{
      
       onAuthStateChanged(auth, (user) => {
      if (user) {
   
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid , email: email , displayName:displayName}))
    // ...
     } else {
    // User is signed out
        dispatch(removeUser());
   }
    });
  })

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body