var express = require("express");
var calculateRouter = express.Router();
var calculateService = require("../services/calculateService");

calculateRouter.post("/:number", function (req, res) {
  var number = req.params.number;
  var result = calculateService(number);
  res.status(result.status).send(result.message);
});

module.exports = calculateRouter;
