const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const PORT = 4200;

app.use(express.json()); // for understanding json format

app.get("/", (req, res) => {
  //   res.send("Working!!!");
  res.status(200).json(req.query);
});

app.post("/", (req, res) => {
  res.status(200).json(req.body);
});

async function connectionApp() {
  try {
    await mongoose.connect(process.env.APP_DB_URI);

    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

connectionApp();
