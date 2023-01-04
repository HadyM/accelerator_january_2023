// import code for express
const express = require("express");

// initialize app
const app = express();

const studentsController = require("./controllers/studentsController");

app.use("/students", studentsController);

// route
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

// export app
module.exports = app;
