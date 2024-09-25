import axios from "axios";

export default axios.create({
  baseURL:'https://world.openfoodfacts.org/api/v3/product/',
  params:{
     key:'737628064502.json'
  }
})