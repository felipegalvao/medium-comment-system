// Comment.js

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  start: Number,
  end: Number,
  text: String
});

mongoose.model("Comment", CommentSchema);

module.exports = mongoose.model("Comment");
