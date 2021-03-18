const { Router } = require("express");
const getPokemon = require("../utils/pokeAPI");

const type = Router();

type.get("/", (req, res) => {
  res.send("type route");
});

type.get("/:type", (req, res) => {
  getPokemon(req.originalUrl)
    .then((data) => {
      console.log(data.pokemon);
      const pokemons = data.pokemon.map((pokemon) => pokemon.pokemon.name);
      res.json(pokemons);
    })
    .catch((err) => res.json({ err: err.message }));
});

module.exports = type;
