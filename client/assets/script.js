const viewComments = document.querySelector('#viewComments');
const newComment = document.querySelector('#form');
const commentSection = document.querySelector('.commentSection');

viewComments.addEventListener('click', searchResults);
newComment.addEventListener('submit', addingComment);

function searchResults(e, id){
    commentSection.innerHTML = ""
    e.preventDefault();
    id = 3;
    // const classes = ['card', 'card-body'];
    // element.classList.add(...list);
    fetch(`http://localhost:3000/data/${id}/comments`)
        .then(res => res.json())
        .then(res => {
            for (const comment in res) {
                const element = res[comment];
                let addComments = document.createElement('div');
                addComments.classList.add('card', 'card-body');
                addComments.textContent = element;
                commentSection.appendChild(addComments);
            }
        });
};

function addingComment(e, id){
    e.preventDefault();

    const comment = {
        comments: e.target.message.value
    }

    console.log(comment)

    const options = {
        method: 'POST',
        body: JSON.stringify(comment),
        header: {
            "Content-Type" : "application/json"
        }
    }

    console.log(options.body);

    id = 3;

    fetch(`http://localhost:3000/data/${id}/comments`, options)
    .then(res => console.log(res.json()))
    .catch(console.warn);
}

