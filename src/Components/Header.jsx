import { logo_url } from "../Utils/constants"

const Header = () => {
  
  return (
    <div className="absolute ml-24 mt-3 bg-gradient-to-b from-black z-20 ">
        <img  className="w-48 "
        src={logo_url} alt="logo"/>
         

    </div>
  )
}

export default Header