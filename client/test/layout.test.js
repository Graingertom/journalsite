const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

/**
 * @jest-environment jsdom
 */

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('has a title', () => {
            const title = document.querySelector('head title');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe("Coding Cats")
        })
    })

    // describe('body', () => {
        
    // })

});