let APIKEY = "qjWg9FdUGKToLMDWBaH9DiHGLVAsmTMj";

const newPostForm = document.getElementById("newPost")

newPostForm.addEventListener('submit', submitForm)

function submitForm (e) {
    e.preventDefault()

    const postData = {
        title: e.target.title.value,
        body: e.target.body.value,
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            "Content-Type" : "application/json"
        }
    };

    fetch('http://localhost:3000/data', options)
        .then(r => r.json())
        .catch(console.warn)
}
