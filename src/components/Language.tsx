import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  original_language: string;
}
const language = {
  en: "English",
  hin: "Hindi",
  chi: "chinease",
};
const Language = ({ original_language }: Props) => {
  let lan = Object.entries(language).map(([key, value]) => {
    if (key === original_language) return value;
  });
  return <Text align={"center"}>{lan} Movie</Text>;
};

export default Language;
