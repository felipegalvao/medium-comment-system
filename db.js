const mongoose = require("mongoose");
const mlabUser = require("./db-connection-secrets");
const mlabPassword = require("./db-connection-secrets");

mongoose.connect(
  "mongodb://" +
    mlabUser +
    ":" +
    mlabPassword +
    "@ds137101.mlab.com:37101/medium-comments"
);
