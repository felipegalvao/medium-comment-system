const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

const Comment = require("./Comment");

// Creates a new comment
router.post("/", function(req, res) {
  Comment.create(
    {
      start: req.body.start,
      end: req.body.end,
      text: req.body.text
    },
    function(err, comment) {
      if (err)
        return res.status(500).send("There was a problem adding your comment");
      res.status(200).send(comment);
    }
  );
});

router.get("/", function(req, res) {
  Comment.find({}, function(err, comments) {
    if (err)
      return res
        .status(500)
        .send("There was a problem retrieving the comments");
    res.status(200).send(comments);
  });
});

module.exports = router;
