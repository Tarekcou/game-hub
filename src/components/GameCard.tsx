import React from "react";
import { Movies } from "../hooks/useMovies";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Language from "./Language";
import Rating from "./Rating";

interface Props {
  movies: Movies;
}

const GameCard = ({ movies }: Props) => {
  return (
    <Card>
      <Image
        src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}
`}
        overflow={"hidden"}
        rounded={"xl"}
      />
      <CardBody>
        <Stack>
          <Heading textAlign={"center"} fontSize={"2xl"}>
            {movies.title}
          </Heading>
          <HStack justifyContent={"space-between"}>
            <Rating vote_average={movies.vote_average} />

            <Text fontSize={"sm"} fontWeight={"bold"}>
              {movies.release_date}
            </Text>
          </HStack>
          <Language original_language={movies.original_language}></Language>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
