const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
dotenv.config()
const router = require("./Routers/router")
const mongoose = require("mongoose")

app.use(bodyParser.json())

mongoose.connect(process.env.DB)
    .then(() => console.log("Connected to mongoDB")).catch(err => console.log(err))

app.use("./router", router)

app.listen(process.env.PORT, () => {
    console.log("running!!")
})