const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());

const journalRoutes = require("./controller/journalController")
app.use('https://fpjournaling.herokuapp.com/data', journalRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!');
    res.status(200);
});

app.post('/', (req, res) => {
    res.status(405).send('Not allowed');
});

module.exports = app
