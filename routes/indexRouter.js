var express = require("express");
var indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  res.status(200).json({ title: "Express" });
});

module.exports = indexRouter;
