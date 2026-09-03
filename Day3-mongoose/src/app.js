const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const NotesModel = require("./model/note.model");

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send(" ohh yes beby ");
});

app.post("/create", async (req, res) => {
  let { title, discription } = req.body;

  const newNote = await NotesModel.create({
    title,
    discription,
  })

  res.send({
    success: true,
    message:"Notes created successfully",
    data:newNote,
  })

  
});

module.exports = app;
