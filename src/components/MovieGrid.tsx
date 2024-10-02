import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import GameCard from "./GameCard";
const GameGrid = () => {
  const { movies, error, isLoding } = useMovies();
  // console.log(games);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {movies.map((movie) => (
          <GameCard key={movie.id} movies={movie} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
