const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200);
});

router.get('/:id', (req, res) => {
    try {
        const id = req.params.id;
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.get('/:id/comments', (req, res) => {
    try {
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});



module.exports = router;