const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(__dirname + "/public"))
const views = path.join(__dirname, "views")

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: views })
})
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: views })
})
app.get("/you", (req, res) => {
  res.sendFile("you.html", { root: views })
})

app.listen(3000)
console.log("Running at port 3000")
