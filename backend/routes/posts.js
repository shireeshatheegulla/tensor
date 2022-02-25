const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  try {
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.put("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateMany(
      { id: req.params.postId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          gender: req.body.gender,
          status: req.body.status,
        },
      }
    );
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

module.exports = router;
