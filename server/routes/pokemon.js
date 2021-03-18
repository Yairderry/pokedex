const { default: axios } = require("axios");
const { Router } = require("express");
const express = require("express");
const getPokemon = require("../utils/pokeAPI");

const pokemon = Router();

pokemon.use(express.json());

pokemon.get("/", (req, res) => {
  getPokemon(req.originalUrl)
    .then((data) => {
      const results = data.results.map((aPokemon) => aPokemon.name);
      const next = data.next ? data.next.slice(25) : null;
      const prev = data.previous ? data.previous.slice(25) : null;
      const info = {
        next,
        prev,
        results,
      };
      res.json(info);
    })
    .catch((err) => res.json({ err: err.message }));
});

pokemon.get("/:name", async (req, res) => {
  try {
    const { name, height, weight, types, sprites } = await getPokemon(
      req.originalUrl
    );
    const newTypes = types.map((type) => type.type.name);
    const img = {
      back_default: sprites.back_default,
      front_default: sprites.front_default,
    };

    const origin = `${req.protocol}://${req.hostname}:${
      process.env.PORT || 3001
    }`;
    const { data } = await axios.get(`${origin}/api/collection`);
    const caught = data.results.includes(name);

    const pokemon = { name, height, weight, types: newTypes, img, caught };
    res.json(pokemon);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ err: "There is no such pokemon!" });
  }
});

pokemon.get("/:id", (req, res) => {
  res.send("Pokemon route");
});

module.exports = pokemon;
