const { Router } = require("express");
const getPokemon = require("../utils/pokeAPI");

const type = Router();

type.get("/", (req, res) => {
  res.send("type route");
});

type.get("/:type", (req, res) => {
  getPokemon(req.originalUrl)
    .then((data) => {
      const pokemons = data.pokemon.map((pokemon) => pokemon.pokemon.name);
      console.log(pokemons);
      res.json(pokemons);
    })
    .catch((err) => res.json({ err: err.message }));
});

module.exports = type;
