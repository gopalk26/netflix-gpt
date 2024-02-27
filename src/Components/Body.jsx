import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browser from "./Browser"
import Login from "./Login"


const Body = () => {

  
    
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



  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body