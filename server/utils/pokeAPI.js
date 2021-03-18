const axios = require("axios").default;
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// You can use this file to write helper functions

function getPokemon(fullRoute) {
  const route = fullRoute.slice(4);
  return axios.get(`${POKEAPI_BASE_URL}${route}`).then((result) => result.data);
}

module.exports = getPokemon;
