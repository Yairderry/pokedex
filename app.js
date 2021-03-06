const express = require("express");
const cors = require("cors");
const api = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", express.static("./client/build"));

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.use("/api", api);
app.use("/", (req, res) => {
  res.status(404).json({ error: "Page not found!" });
});

module.exports = app;
