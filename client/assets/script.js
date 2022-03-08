const viewComments = document.querySelector('h3');
const newComment = document.querySelector('#form')

viewComments.addEventListener('click', searchResults);
newComment.addEventListener('submit', addingComment);

function searchResults(e, id){
    e.preventDefault();
    id = 1;
    fetch(`http://localhost:3000/data/${id}/comments`)
        .then(res => res.json())
        .then(res => {
            for (const comment in res) {
                const element = res[comment];
                console.log(element);
            }
        });
};

function addingComment(e, id){
    e.preventDefault();
    const comment = e.target.message.value;
    id = 3;
    fetch(`http://localhost:3000/data/${id}/comments`)
    .then(res => res.json())
    .then(res => {
        for (const comment in res) {
            const element = res[comment];
            console.log(element);
        }
    });
}

