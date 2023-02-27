const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// contain Mongoose reduction warning for `strictQuery`
mongoose.set('strictQuery', false);

