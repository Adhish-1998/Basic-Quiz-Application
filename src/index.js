const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./Routes/route')
const cors = require('cors')
require('dotenv').config()

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use('/', route)



mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true })
    .then(() => console.log("mongoDB is connected"))
    .catch((err) => console.log(err));


app.listen(process.env.PORT || 5000, function () {
    console.log("app is running on the port", process.env.PORT || 5000)
});