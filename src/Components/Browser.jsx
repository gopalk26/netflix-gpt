
import UseNowPlayingMovies from "../Hooks/UseNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";


const Browser = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
   
    UseNowPlayingMovies();   // custom hook it will handle now playing movie api
    usePopularMovies();
    return (
        <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
    );
    
};

export default Browser;
