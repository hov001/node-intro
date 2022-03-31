const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const Posts = require("./Posts/Posts.router");

const PORT = 4200;

app.use(express.json()); // for understanding json format
app.use("/api", Posts);

// app.get("/", (req, res) => {
//   res.send("Working!!!");
//   res.status(200).json(req.query);
// });

// app.post("/", (req, res) => {
//   try {
//     const { author, title, text, picture, date } = req.body;
//     const post = Post.create({ author, title, text, picture, date });
//     res.status(200).json(post);
//   } catch (e) {
//     res.status(500).json(e.message);
//   }
// });

async function connectionApp() {
  try {
    await mongoose.connect(process.env.APP_DB_URI);

    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
}

connectionApp();
