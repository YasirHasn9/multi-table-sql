const express = require("express");
const db = require("../data/config");

const postRouter = require("../posts/posts-router");

const router = express.Router();
router.use("/:id/posts", postRouter);

router.get("/", async (req, res, next) => {
  try {
    const users = await db("users");
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await db("users")
      .where({ id: req.params.id })
      .first();
    res.json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("users").insert(req.body);
    const user = await db("users")
      .where({ id })
      .first();
    res.json(user);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
