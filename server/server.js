const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

const appRoutes = require("./controller/journalController")
app.use('/data', appRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app