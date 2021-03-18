const { Router } = require("express");
const express = require("express");
const getPokemon = require("../utils/pokeAPI");

const pokemon = Router();

pokemon.use(express.json());

pokemon.get("/", (req, res) => {
  getPokemon(req.originalUrl)
    .then((data) => {
      const pokemons = data.results.map((aPokemon) => aPokemon.name);
      res.json(pokemons);
      // res.json(data);
    })
    .catch((err) => res.json({ err: err.message }));
});

pokemon.get("/:name", (req, res) => {
  getPokemon(req.originalUrl)
    .then(({ name, height, weight, types }) => {
      const newTypes = types.map((type) => type.type.name);
      const pokemon = { name, height, weight, types: newTypes };
      res.json(pokemon);
    })
    .catch((err) => res.json({ err: err.message }));
});

pokemon.get("/:id", (req, res) => {
  res.send("Pokemon route");
});

module.exports = pokemon;
