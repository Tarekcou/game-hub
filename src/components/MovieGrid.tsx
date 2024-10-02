import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import GameCard from "./GameCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
const MovieGrid = () => {
  const { movies, error, isLoding } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6];
  // console.log(games);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
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
