const { Router } = require("express");
const { getPokemon, isPokemonCaught } = require("../utils/pokeAPI");

const type = Router();

type.get("/:type", async (req, res) => {
  res.send("What");
  // try {
  //   const data = await getPokemon(req.originalUrl);
  //   const results = await Promise.all(
  //     data.pokemon.map(async ({ pokemon }) => ({
  //       name: pokemon.name,
  //       img: null,
  //       caught: await isPokemonCaught(pokemon.name, req),
  //     }))
  //   );
  //   res.json({ next: null, prev: null, results });
  // } catch {
  //   res.status(404).json({ error: "No such pokemon in this collection" });
  // }
});

module.exports = type;
