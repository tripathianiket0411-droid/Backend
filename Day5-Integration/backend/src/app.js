const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const notesModel = require("./models/notesModels");
const notesRoutes = require("./routes/notes.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173  ",
  }),
);

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ohh yes beby");
});

app.use("/notes", notesRoutes);

module.exports = app;
