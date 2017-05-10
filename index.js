const express = require("express");
const app = express();
const db = require("./db");

const CommentController = require("./comment/CommentController");
app.use("/comments", CommentController);

app.get('/', function (req, res) {
  res.send('Home Page');
});

module.exports = app;
