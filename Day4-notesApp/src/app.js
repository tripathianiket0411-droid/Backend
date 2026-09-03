const express = require("express")
const connectDB = require("./config/db")
const notesModel = require("./models/notesModels")
const createNotesController = require("./controllers/notes.controller")
const notesRoutes = require("./routes/notes.routes")

const app = express()
connectDB()

app.use(express.json())


app.get("/", (req, res) => {
    res.send("ohh yes beby")
})

app.use("/notes", notesRoutes)


module.exports = app;