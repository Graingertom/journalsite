const request = require('supertest');
// import server
const server = require('../server');

describe('API server', () => {
    let api;
    let testPost = {
        title: 'title',
        body: 6,
        image: ""
    };

    let testComment = {
        message: ""
    };

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

    // it('responds to post /data with status 201', (done) => {
    //     request(api)
    //         .post('/data')
    //         .send(testData)
    //         .set('Accept', /application\/json/)
    //         .expect(201)
    //         .expect({ id: 1, ...testData }, done);
    // });

    // it('retrieves a post by id', (done) => {
    //     request(api)
    //         .get('/data/3')
    //         .expect(200)
    //         .expect({ title: 'title', body: 'message', image: "" }, done);
    // });

    it('responds to a unknown post id with a 404', (done) => {
        request(api).get('/data/42').expect(404).expect({}, done);
    });

    it('responds to non existing paths with 404', (done) => {
        request(api).get('/cats').expect(404, done);
    });

    // it('responds to invalid method request with 405', (done) => {
    //     request(api).post('/').expect(405, done);
    // });

})