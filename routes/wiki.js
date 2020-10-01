const express = require("express");
const addPageReq = require("../views/addPage.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("retrieve all wiki pages");
});

router.post("/", (req, res, next) => {
  res.send(res.json(req.body));
});

router.get("/add", (req, res, next) => {
  res.send(addPageReq());
});

module.exports = router;
