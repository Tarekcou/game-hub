import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import MovieOrTvSelector from "./MovieOrTvSelector";
const Navbar = () => {
  return (
    <HStack spacing="5" padding={5} justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
