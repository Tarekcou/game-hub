import axios from 'axios';
import { useEffect, useState } from "react";

export interface Movies {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  vote_count: number;
  release_date: string;
  poster_path:string
}
interface FetchMovieResponse {
  pageNo: number;
  results: Movies[];
}
const useMovies = () => {

   const [movies, setMovies] = useState<Movies[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDZlZjg5NzY4OTdlNDFmMzBmNGIyOWRhYTEyNDgxYSIsIm5iZiI6MTcyNzc5NTMwNC4wMjkyNTUsInN1YiI6IjY2ZjQ1NWE0MGVjYTE3ZGExYjBlMDdlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.egjhPgvEvOXoAxZ57DvuXkFQiUMbzlgqAKpagdS9rMA",
      },
    };
    axios
      .get<FetchMovieResponse>(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      )
      .then((response) => response.data)
      .then((res) => {
        console.log(res.results)
        setMovies(res.results)})
      .catch((err) => setError(err.message));
  },[]);

  return {movies,error}
}

export default useMovies;
