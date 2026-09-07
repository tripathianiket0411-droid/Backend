const express = require("express")
const userRoute = require("./routes/user.routes")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("ohkkkk got it everything is running properly")
})

app.use("/user", userRoute)

module.exports = app;