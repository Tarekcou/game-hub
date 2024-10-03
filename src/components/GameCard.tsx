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
import getCroppedImageUrl from "../services/image-url";

interface Props {
  movies: Movies;
}

const GameCard = ({ movies }: Props) => {
  return (
    <Card border={"red"} overflow={"hidden"} rounded={"xl"}>
      <Image
        // height={"250px"}
        src={getCroppedImageUrl(`https://image.tmdb.org/t/p/${movies.poster_path}
`)}
      />
      <CardBody padding={"5px"} paddingBottom={"5px"}>
        <Stack>
          <Heading textAlign={"center"} fontSize={"xl"}>
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
