const { Router } = require("express");
const express = require("express");
const { getPokemon, isPokemonCaught } = require("../utils/pokeAPI");

const pokemon = Router();

pokemon.use(express.json());

pokemon.get("/", async (req, res) => {
  try {
    const { results, previous, next } = await getPokemon(req.originalUrl);
    const newResults = await Promise.all(
      results.map(async ({ name }) => {
        const newPokemon = {
          name,
          img: null,
          caught: await isPokemonCaught(name, req),
        };
        return newPokemon;
      })
    );
    const newNext = next ? next.slice(33) : null;
    const prev = previous ? previous.slice(33) : null;
    const info = {
      next: newNext,
      prev,
      results: newResults,
    };
    res.json(info);
  } catch (err) {
    res.json({ err: err.message });
  }
});

pokemon.get("/:name", (req, res) => {
  getPokemon(req.originalUrl).then(
    ({ name, height, weight, types, sprites, id }) => {
      const newTypes = types.map((type) => type.type.name);
      const img = {
        back_default: sprites.back_default,
        front_default: sprites.front_default,
      };

      isPokemonCaught(name, req).then((caught) => {
        const pokemon = {
          id,
          name,
          height,
          weight,
          types: newTypes,
          img,
          caught,
        };
        res.json(pokemon);
      });
    }
  );
  // try {
  //   const { name, height, weight, types, sprites, id } = await getPokemon(
  //     req.originalUrl
  //   );
  //   const newTypes = types.map((type) => type.type.name);
  //   const img = {
  //     back_default: sprites.back_default,
  //     front_default: sprites.front_default,
  //   };

  //   const caught = await isPokemonCaught(name, req);

  //   const pokemon = { id, name, height, weight, types: newTypes, img, caught };
  //   res.json(pokemon);
  // } catch (err) {
  //   return res.status(404).json({ err: "There is no such pokemon!" });
  // }
});

module.exports = pokemon;
