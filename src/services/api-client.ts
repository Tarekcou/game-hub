import axios from "axios";

export default axios.create({
  baseURL:'https://world.openfoodfacts.org/api/v3/product/737628064502.json',
  params:{
    key:'106ef8976897e41f30f4b29daa12481a',
    token:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDZlZjg5NzY4OTdlNDFmMzBmNGIyOWRhYTEyNDgxYSIsIm5iZiI6MTcyNzI4OTIzNC42OTU1MTksInN1YiI6IjY2ZjQ1NWE0MGVjYTE3ZGExYjBlMDdlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JK-X-PTzUOEMLiQVbWMjV5FwjOKMZnP6n2Iu0vkrf20'
  }
})