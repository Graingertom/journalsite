// import data and model
const journalData = require("../data/data");
const Journal = require("../model/journalModel");


describe('Model Testing', () => {
    const testJournal = {
        title: 'test',
        body: "This is a test",
        image: "blank",
        comments: ["I like this test"],
    };

    it('should make an instance of a post', () => {
        const post = new Journal({ id: 14, ...testJournal });

        expect(post.id).toBe(14);
        expect(post.title).toBe('test');
        expect(post.body).toBe('This is a test');
        expect(post.image).toBe("blank");
        expect(post.comments[0]).toBe("I like this test");
    });

    it('should return all journal posts', () => {
        const journal = Journal.getAll;

        expect(journal).toEqual(journalData);
    });

    it('should return a post by its ID', () => {
        const post = Journal.findById(1);

        expect(post).toEqual(journalData[0]);
    });

    it('should throw an error if no post', () => {
        function testError() {
            Journal.findById(100);
        }

        expect(testError).toThrowError('That post does not exist');
    });

});
