const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


/**
 * @jest-environment jsdom
 */
 global.fetch = require('jest-fetch-mock');
 let app;
 let data = {
    id: 1,
    title: "Lemons float, but limes sink",
    body: "Because limes are denser than lemons, they drop to the bottom of a glass, while lemons float at the top. Out of all these random fun facts, this one’s been in front of our faces (or rather, in our glasses) this whole time! Check out these other things to wonder about that you likely never thought of before.",
    image: "https://media1.giphy.com/media/xT0GqjBCkO9BEiSEOk/giphy.gif?cid=b9d36a782ownxmygoykokf1j97hw4dpqehfrrzz6639pglyt&rid=giphy.gif&ct=g",
    button1: 1,
    button2: 3,
    button3: 2,
    comments: ["Lemons are great", "Limes a sinker!"]
};
 
 describe('app', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        app = require("../assets/homepage.js")
    })

    afterEach(() => {
        fetch.resetMocks();
    })

    describe('requests', () => {
        describe('fill', () => {
            test('it makes a get request to /data', () => {
                document.addEventListener('DOMContentLoaded', (data) => {
                app.fill(); })
                // expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\/cats$/))
                expect(fetch.mock.calls[0][0]).toMatch(/data$/)
            })
        });

/*describe('elements are appended into article', () => {
    test('h2 appends to body', () => {
        const newh2 = newHomePost.h2;
        expect(newh2).toBeTruthy();
        })
    })*/
    })
})