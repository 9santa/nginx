const express = require("express")

const app = express()
const port = 7777

app.get("/", (req, res) => {
    res.sendFile("/home/cohle/it/mysite/index.html")
})

app.listen(port, () => {
    console.log("Listening on port", { port })
})
