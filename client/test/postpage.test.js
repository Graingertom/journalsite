const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../post.html'), 'utf8');

/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

describe('post.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

describe('head', () => {
        test('has a title', () => {
            const title = document.querySelector('head title');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe("Post")
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

        test('it has a search form for gifs', () => {
            let newSearch = document.getElementById('searchInput');
            expect(newSearch).toBeTruthy();
            let newSearchBtn = document.getElementById('searchButton');
            expect(newSearchBtn).toBeTruthy();
        })

        test('it has form for new posts', () => {
            let imgPicked = document.getElementById('selectedImg');
            expect(imgPicked).toBeTruthy();
            let newTitle = document.getElementById('title');
            expect(newTitle).toBeTruthy();
            let newMessage = document.getElementById('message');
            expect(newMessage).toBeTruthy();
            let newPosty = document.getElementById('posty');
            expect(newPosty).toBeTruthy();
        })
    })
})


