import { Badge, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";

interface Props {
  vote_average: number;
}
const Rating = ({ vote_average }: Props) => {
  let color = vote_average > 8 ? "#48BB78" : vote_average > 6 ? "#ECC94B" : "";
  return (
    <Badge>
      <HStack>
        <FaStar color={color} width={4} height={4} />
        <Text fontSize={"lg"}> {vote_average.toFixed(1)}</Text>
      </HStack>
    </Badge>
  );
};

export default Rating;
