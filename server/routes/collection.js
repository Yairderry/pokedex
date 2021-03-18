const { Router, response } = require("express");

const collection = Router();

const userCollection = [];

collection.get("/", (req, res) => {
  res.send({ userCollection });
});

collection.post("/catch", (req, res) => {
  const pokemon = req.body.name;

  if (userCollection.includes(pokemon))
    return res
      .status(400)
      .json({ error: "Pokemon already in your collection" });

  userCollection.push(pokemon);
  return res.json({ message: "Pokemon caught!" });
});

collection.delete("/release/:name", (req, res) => {
  const { name } = req.params;

  if (!userCollection.includes(name))
    return res
      .status(404)
      .json({ error: "This pokemon is not in your collection" });

  userCollection.splice(userCollection.indexOf(name), 1);
  return res.json({ message: "Pokemon released!" });
});
module.exports = collection;
