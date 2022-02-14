const express = require("express");
const cors = require("cors");
const app = express();

const retailController = require("./controllers/retailController");

app.use(cors());
app.use(express.json());

app.use("/retail", retailController);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to your retail store");
});

app.get("*", (request, response) => {
  response.status(404).send("this is not the page you are looking for");
});

module.exports = app;
