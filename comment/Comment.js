// Comment.js

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  postFragment: String,
  text: String
});

mongoose.model("Comment", CommentSchema);

module.exports = mongoose.model("Comment");
