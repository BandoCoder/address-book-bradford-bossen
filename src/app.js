require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV } = require("./config");

const app = express();

const morganOption = NODE_ENV === "production" ? "tiny" : "common";

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

const addresses = [
  {
    id: 348345384353483453483453,
    firstName: "Bradford",
    lastName: "Bossen",
    address1: "1234 Thirst Dr.",
    address2: "1234 Thirst Dr.",
    city: "Alarada",
    state: "CA",
    zip: "92333",
  },
  {
    id: 348345384353483453483453,
    firstName: "Bradford",
    lastName: "Bossen",
    address1: "1234 Thirst Dr.",
    address2: "1234 Thirst Dr.",
    city: "Alarada",
    state: "CA",
    zip: "92333",
  },
];

app.get("/address", (req, res) => {
  //if (addresses.length === 0) {
  //  return res.status(400).send("NO ADDRESS DATA PRESENT, PLEASE ADD");
  //} else {
  //return
  res.json(addresses);
  // }
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
