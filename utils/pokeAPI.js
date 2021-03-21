const axios = require("axios").default;
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// You can use this file to write helper functions

function getPokemon(fullRoute) {
  const route = fullRoute.slice(4);
  return axios.get(`${POKEAPI_BASE_URL}${route}`).then((result) => result.data);
}

// async function isPokemonCaught(name, req) {
//   const origin = `${req.protocol}://${req.hostname}:${
//     process.env.PORT || 3001
//   }`;
//   const { data } = await axios.get(`${origin}/api/collection`);
//   return data.results.find((pokemon) => pokemon.name === name) ? true : false;
// }

function isPokemonCaught(name, req) {
  const origin = `${req.protocol}://${req.hostname}:${
    process.env.PORT || 3001
  }`;
  return axios.get(`${origin}/api/collection`).then((data) => {
    return data.results.find((pokemon) => pokemon.name === name) ? true : false;
  });
}

module.exports = { getPokemon, isPokemonCaught };
