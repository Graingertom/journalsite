//import
const journalData = require("../data/data");


class Journal {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.body = data.body; 
        this.image = data.image;
        this.comments = data.comments
    }
}



module.exports = Journal;