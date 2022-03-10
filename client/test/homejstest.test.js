const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


/**
 * @jest-environment jsdom
 */
 global.fetch = require('jest-fetch-mock').enableFetchMocks;
 let app;
 
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
                document.addEventListener('DOMContentLoaded', () => {
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