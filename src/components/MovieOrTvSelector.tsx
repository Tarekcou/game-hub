import { Button, HStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  movieOrtvOnclick: (filtedText: string) => void;
}
const MovieOrTvSelector = ({ movieOrtvOnclick }: Props) => {
  return (
    <HStack justifyContent={"center"}>
      <Button
        className="btn btn-primary"
        onClick={() => movieOrtvOnclick("movie")}
      >
        Movies
      </Button>
      <Button onClick={() => movieOrtvOnclick("tv")}>Tv Show</Button>
    </HStack>
  );
};

export default MovieOrTvSelector;
