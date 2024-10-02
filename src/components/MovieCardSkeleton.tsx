import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const MovieCardSkeleton = () => {
  return (
    <Card width={"300px"}>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;
