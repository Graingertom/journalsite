const express = require('express');
const router = express.Router();

const Journal = require("../model/journalModel");

router.get('/', (req, res) => {
    res.send(Journal.All);
    res.status(200);
});

router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const selectedPost = Journal.findById(id);
        res.send(selectedPost);
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

router.get('/:id/comments', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const selectedPost = Journal.findById(id);
        res.send(selectedPost.comments)
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

module.exports = router;