const express = require("express");
const db = require("../data/config");

const router = express.Router({
  mergeParams: true
});

router.get("/", async (req, res, next) => {
  try {
    const posts = await db("posts")
      .where({ user_id: req.params.id })
      .leftJoin("users", "posts.user_id", "users.id")
      .select("posts.id", "posts.contents", "users.username");
    res.json(posts);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
