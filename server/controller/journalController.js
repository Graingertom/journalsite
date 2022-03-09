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

router.post("/", (req, res) => {
    const data = req.body;
    const newPost = Journal.create(data);
    res.status(201).send(newPost);
});

router.post("/:id/comments", (req, res) => {
    let data = req.body;
    const id = parseInt(req.params.id);
    console.log("Data req: " + data);
    console.log(JSON.stringify(data));
    for (const key in data) {
        const element = data[key];
        console.log("loop data:" + element);
        
    }
    data = {"comments":"That's mad!"};
    // data = JSON.stringify(data);
    // data = JSON.parse(data);
    console.log("this is now data" + data);
    for (const key in data) {
        const element = data[key];
        console.log("loop data:" + element);
        
    }
    console.log(JSON.stringify(data) + id);
    const newSelectedPost = Journal.createComment(id, data);
    res.status(201).send(newSelectedPost.comments);
});

router.post("/:id/comments", (req, res) => {
    const data = req.body;
    const newComment = Journal.comment(data)
    res.status(201).send(newComment)
})

module.exports = router;
