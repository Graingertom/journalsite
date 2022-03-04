const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

const journalRoutes = require("./controller/journalController")
app.use('/data', journalRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app