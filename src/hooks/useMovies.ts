import axios from 'axios';
import { useEffect, useState } from "react";
import apiClient from '../services/api-client';

export interface Movies {
  id: number;
  title: string;
  overview: string;
  original_language:string,
  popularity: number;
  vote_count: number;
  vote_average:number,
  release_date: string;
  poster_path:string
}
interface FetchMovieResponse {
  pageNo: number;
  results: Movies[];
}
const useMovies = (movietvSelector:string) => {

   const [movies, setMovies] = useState<Movies[]>([]);
  const [error, setError] = useState('');
  const [isLoding,setLoding]=useState(false);

  console.log(movietvSelector)
  useEffect(() => {
    const controller=new AbortController();
    // const options = {
    //   method: "GET",
    //   headers: {
    //     accept: "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDZlZjg5NzY4OTdlNDFmMzBmNGIyOWRhYTEyNDgxYSIsIm5iZiI6MTcyNzc5NTMwNC4wMjkyNTUsInN1YiI6IjY2ZjQ1NWE0MGVjYTE3ZGExYjBlMDdlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.egjhPgvEvOXoAxZ57DvuXkFQiUMbzlgqAKpagdS9rMA",
    //   },
    // };

    setLoding(true);
    apiClient.get<FetchMovieResponse>(`/${movietvSelector}?`,{signal:controller.signal})
      .then((response) => response.data)
      .then((res) => {
        console.log(res.results)
        setLoding(false)
        setMovies(res.results)})
      .catch((err) => 
        {
        setLoding(false); setError(err.message)
      });
    return ()=>controller.abort()
  },[movietvSelector]);

  return {movies,error,isLoding}
}

export default useMovies;
