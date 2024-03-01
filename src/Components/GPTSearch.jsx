import { background_url } from "../Utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions ";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className src={background_url} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar/> 
        <GptMovieSuggestions/>
      </div>
    </>
  );
};
export default GPTSearch;