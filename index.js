const express = require("express");
const app = express();
const db = require("./db");

app.use((req,res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  next();
})

const CommentController = require("./comment/CommentController");
app.use("/comments", CommentController);

app.get('/', function (req, res) {
  res.send('Home Page');
});

module.exports = app;
