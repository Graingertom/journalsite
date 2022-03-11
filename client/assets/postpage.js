const newPostForm = document.getElementById("newPost")

newPostForm.addEventListener('submit', submitForm)

function submitForm (e) {
    e.preventDefault()
    console.log(e)

    const postData = {
        title: e.target.title.value,
        body: e.target.body.value,
        image: e.target.children[0].currentSrc,
        button1: 0,
        button2: 0,
        button3: 0,
        comments: []
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            "Content-Type" : "application/json"
        }
    };

    console.log(options.body)

    fetch('http://localhost:3000/data', options)
        .then(r => console.log(r.json()))
        .catch(console.warn)
}
