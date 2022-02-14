const express = require("express");
const { getAllItems, getOneItem } = require("../queries/retail");
const retail = express.Router();

retail.get("/", async (req, res) => {
  const items = await getAllItems();
  res.status(200).json(items);
});

retail.get("/:id", async (req, res) => {
  console.log("Getting request to /:id");
  const item = await getOneItem(req.params.id);
  res.status(200).json(item);
});

module.exports = retail;
