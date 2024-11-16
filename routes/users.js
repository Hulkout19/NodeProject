const express = require("express")
const router = express.Router()

app.get("/users", (req,res) => {
    res.send("Users list")
})

app.get("/users/new", (req,res) => {
    res.send("user new forms")
})

module.exports = router