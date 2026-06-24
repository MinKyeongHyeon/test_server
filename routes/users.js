const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi this is user Router");
});

router.get("/new", (req, res) => {
  res.send("OH this is new userForm");
});

module.exports = router;
