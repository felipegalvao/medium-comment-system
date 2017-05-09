const mongoose = require("mongoose");
const mlabSecrets = require("./db-connection-secrets");

const mlabUser = mlabSecrets.mlabUser;
const mlabPassword = mlabSecrets.mlabPassword;

mongoose.connect(
  "mongodb://" +
    mlabUser +
    ":" +
    mlabPassword +
    "@ds137101.mlab.com:37101/medium-comments"
);
