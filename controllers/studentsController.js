const express = require("express");
const controller = express.Router();

controller.get("/", (req, res) => {
  res.json({ hello: "world" });
});

module.exports = controller;
