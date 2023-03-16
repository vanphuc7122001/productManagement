const express = require("express");
const cors = require("cors");

const setBodyParser = (app) => {
  app.use(express.urlencoded({ extended: false }));
  // parse application/json
  app.use(express.json());
};

const setCors = (app) => {
  app.use(cors());
};

module.exports = {
  setBodyParser,
  setCors,
};
