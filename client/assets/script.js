// const newComment = document.querySelector('#form');
// const commentSection = document.querySelector('.commentSection');

// document.addEventListener("DOMContentLoaded", getId);
// // viewComments.addEventListener('click', searchResults);
// newComment.addEventListener('submit', addingComment);
// // viewComments.addEventListener('mouseover', getId)

// function getId (e) {
//     e.preventDefault();
//     fetch(`http://localhost:3000/data`)
//     .then(res => { return res.json()})
//     .then(data => console.log(data[0]))
//     // .then(res => console.log(viewComments))
// }

// function searchResults(e, id){
//     commentSection.innerHTML = ""
//     e.preventDefault();
//     // const classes = ['card', 'card-body'];
//     // element.classList.add(...list);
//     fetch(`http://localhost:3000/data/${id}/comments`)
//         .then(res => res.json())
//         .then(res => {
//             for (const comment in res) {
//                 const element = res[comment];
//                 let addComments = document.createElement('div');
//                 addComments.classList.add('card', 'card-body');
//                 addComments.textContent = element;
//                 commentSection.appendChild(addComments);
//             }
//         });
// };

// function addingComment(e, id){
//     e.preventDefault();

//     const comment = {
//         comments: e.target.message.value
//     }

//     console.log(comment)

//     const options = {
//         method: 'POST',
//         body: JSON.stringify(comment),
//         header: {
//             "Content-Type" : "application/json"
//         }
//     }

//     console.log(options.body);

    
    
//     fetch(`http://localhost:3000/data/${id}/comments`, options)
//     .then(res => res.json())
//     .catch(console.warn);
// }

