const express = require("express");
const connectDB = require("./config/db");
connectDB();
const app = express();
app.use(express.json())
const postRoutes = require("./routes/notesRoutes");

app.get("/", (req, res) => {
  res.send("done done");
});

app.use("/api/post", postRoutes);

module.exports = app;
