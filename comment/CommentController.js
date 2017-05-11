const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

const Comment = require("./Comment");

// Creates a new comment
router.post("/", function(req, res) {
  Comment.create(
    {
      text: req.body.text,
      postFragment: req.body.postFragment
    },
    function(err, comment) {
      if (err)
        return res.status(500).send("There was a problem adding your comment");
      res.status(200).send(comment);
    }
  );
});

// Gets all comments
router.get("/", function(req, res) {
  Comment.find({}, function(err, comments) {
    if (err)
      return res
        .status(500)
        .send("There was a problem retrieving the comments");
    res.status(200).send(comments);
  });
});

// Deletes a comment
router.delete("/:id", function(req, res) {
  Comment.findByIdAndRemove(req.params.id, function(err, user) {
    if (err)
      return res.status(500).send("There was a problem deleting this comment");
    res.status(200).send("Comment succesfully deleted");
  });
});

module.exports = router;
