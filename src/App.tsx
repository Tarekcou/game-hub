import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/MovieGrid";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" 
        "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">
          <MovieGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
