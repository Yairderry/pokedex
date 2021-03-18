const { Router } = require("express");
const getPokemon = require("../utils/pokeAPI");

const type = Router();

type.get("/:type", (req, res) => {
  getPokemon(req.originalUrl)
    .then((data) => {
      const results = data.pokemon.map((pokemon) => pokemon.pokemon.name);
      res.json({ next: null, prev: null, results });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ error: "No such pokemon in this collection" });
    });
});

module.exports = type;
