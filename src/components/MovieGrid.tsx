import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Products {
  id: number;
  brand_owner: string;
  brands: string;
  countries_imported: string;
  generic_name: string;
  ingredients_text: string;
  image_front_small_url: string;
}
interface FetchGamesResponse {
  id: number;
  // results: Games[];
}
const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("https://world.openfoodfacts.org/api/v3/product/737628064502.json")
      .then((res) => console.log(res.data.product.brand_owner))
      .catch((err) => setError(err.message));
  });
  // console.log(games);
  return (
    <ul>
      {/* {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))} */}
    </ul>
  );
};

export default GameGrid;
