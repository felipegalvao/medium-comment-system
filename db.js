const mongoose = require("mongoose");

const mlabUser = process.env.MLABUSER;
const mlabPassword = process.env.MLABPASSWORD;

mongoose.connect(
  "mongodb://" +
    mlabUser +
    ":" +
    mlabPassword +
    "@ds137101.mlab.com:37101/medium-comments"
);
