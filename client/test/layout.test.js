const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

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

    describe('body', () => {
        //Testing Header
        test('has a header', () => {
            expect(document.querySelector('header')).toBeTruthy();
        })

        test('it has a header title', () => {
            let header = document.querySelector('header');
            expect(header.textContent).toContain('Coding Cats');
        })

        test('it has a new post button', () => {
            let postButton = document.getElementsByClassName('btn btn-light');
            expect(postButton).toBeTruthy();
        })

        //Testing the section banner
        test('the welcoming text in the section banner', () => {
            let banner = document.querySelector('.banner');
            expect(banner.textContent).toContain('Welcome to the');
            expect(banner.textContent).toContain('Coding Cats');
            expect(banner.textContent).toContain('blogpage!');
            expect(banner.textContent).toContain('write a post');
        })

        test('it has a new post button', () => {
            let postButton = document.getElementsByClassName('btn btn-light');
            expect(postButton).toBeTruthy();
        })

        //Article testing
        
    })

});
