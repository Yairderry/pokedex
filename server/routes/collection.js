const { Router } = require("express");

const collection = Router();

const userCollection = [];

collection.get("/", (req, res) => {
  res.send({ next: null, prev: null, results: userCollection });
});

collection.post("/catch", (req, res) => {
  const { name } = req.body;

  if (userCollection.find((pokemon) => pokemon.name === name))
    return res
      .status(400)
      .json({ error: "Pokemon already in your collection" });

  userCollection.push({ name, img: null, caught: true });
  return res.json({ next: null, prev: null, results: userCollection });
});

collection.delete("/release/:name", (req, res) => {
  const { name } = req.params;

  if (!userCollection.find((pokemon) => pokemon.name === name))
    return res
      .status(404)
      .json({ error: "This pokemon is not in your collection" });

  userCollection.filter((pokemon) => pokemon.name !== name);
  return res.json({ next: null, prev: null, results: userCollection });
});

module.exports = collection;
