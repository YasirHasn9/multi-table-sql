const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await db("users");
    res.json(users);
  } catch (err) {
    next(err);
  }
});


});
module.exports = router;
