const request = require('supertest');
// import server
const server = require('../server');

describe('API server', () => {
    let api;
    let testPost = {
        title: 'new',
        body: "new",
        image: "new",
        comments: ["new"]
    };
    let testComment = {comments: "Adding Comment"};

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /data with status 200', (done) => {
        request(api).get('/data').expect(200, done);
    });

    it('responds to get /data/:id with status 200', (done) => {
        request(api).get('/data/1').expect(200, done);
    });

    it('responds to get /data/:id/comments with status 200', (done) => {
        request(api).get('/data/1/comments').expect(200, done);
    });

    // Needs to be fixed in controller
    // it('responds to get /data/:id/button1 with status 200', (done) => {
    //     request(api).get('/data/1/button1').expect(200, done);
    // });

    it('responds to post /data with status 201', (done) => {
        request(api)
            .post('/data')
            .send(testPost)
            .set('Accept', /application\/json/)
            .expect(201)
            .expect({ id: 6, ...testPost }, done);
    });

    it('retrieves a post by id', (done) => {
        request(api)
            .get('/data/3')
            .expect(200)
            .expect({
                id: 3, 
                title: "A waffle iron inspired one of the first pairs of Nikes",
                body: "Bill Bowerman was a track and field coach in the 1950s who didn’t like how running shoes were made. He first created the Cortez shoe but wanted a sneaker that was even lighter and could be worn on a variety of surfaces. During a waffle breakfast with his wife in 1970, he came up with the idea of using the waffle texture on the soles of running shoes. Waffle-soled shoes made their big debut in the 1972 U.S. Olympic track and field trials in Eugene, Oregon.",
                image: "https://media4.giphy.com/media/3orife6azqV5OdntRu/giphy-downsized.gif?cid=b9d36a78ag9y4bjtg0o3e5hcg4qldtqb1uz838h91khg3ifj&rid=giphy-downsized.gif&ct=g",
                button1: 8,
                button2: 0,
                button3: 2,
                comments: ["That's so inspiring", "I never knew"]
            }, done);
    });

    it('responds to post /data/3/comments with status 201', (done) => {
        request(api)
            .post('/data/3/comments')
            .send(testComment)
            .set('Accept', /application\/json/)
            .expect(201)
            .expect([ "That's so inspiring", 'I never knew', 'Adding Comment' ], done);
    });

    it('responds to a unknown post id with a 404', (done) => {
        request(api).get('/data/42').expect(404).expect({}, done);
    });

    it('responds to a unknown post id comment with a 404', (done) => {
        request(api).get('/data/99/comments').expect(404).expect({}, done);
    });

    it('responds to non existing paths with 404', (done) => {
        request(api).get('/cats').expect(404, done);
    });

    it('responds to invalid method request with 405', (done) => {
        request(api).post('/').expect(405, done);
    });

})