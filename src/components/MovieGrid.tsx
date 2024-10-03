import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import GameCard from "./GameCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieOrTvSelector from "./MovieOrTvSelector";
import { useState } from "react";
const MovieGrid = () => {
  const [movietvSelector, setmovietvSelector] = useState("movie");

  const { movies, error, isLoding } = useMovies(movietvSelector);
  const skeletons = [1, 2, 3, 4, 5, 6];
  // console.log(games);

  const movieOrtvOnclick = (filtedText: string) => {
    setmovietvSelector(filtedText);
    console.log(filtedText);
  };
  return (
    <>
      <MovieOrTvSelector movieOrtvOnclick={movieOrtvOnclick} />

      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 4, lg: 5, xl: 5 }}
        spacing={5}
        padding={10}
      >
        {isLoding &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}

        {movies.map((movie) => (
          <GameCard key={movie.id} movies={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
