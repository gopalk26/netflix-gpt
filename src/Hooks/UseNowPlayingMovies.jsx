import { useEffect } from "react";
import { addNowpalyingMovies } from "../Utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";



const UseNowPlayingMovies = ()=>{

    const dispatch = useDispatch();
   
    const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovies);
  
    const nowPlayingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            if (!response.ok) {
                throw new Error('Failed to fetch');// here you need check
            }
            const json = await response.json();
            console.log(json.results);
            dispatch(addNowpalyingMovies(json.results)); 

        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
       !nowPlayingMovie && nowPlayingMovies();
    }, []);


};
  export default UseNowPlayingMovies;