import React from "react";
import { Movies } from "../hooks/useMovies";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

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
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{movies.title}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
