//pulls from database
document.addEventListener("DOMContentLoaded", fill);
function fill() {
    try {
        fetch('http://localhost:3000/data')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                document.getElementById("toShow").innerHTML = ""
                events(data)
            })

    }
    catch (error) {
        console.log(error)
    }

}

// creates events for each entry in the database
const events = data => {

    for (let entry of data) {

        // Gets buttons to add to DB on click / struggle to get display to change
        button1 = document.getElementById(`button1`)
//         button2 = document.getElementById(`${entry.id} + button2`)
//         button3 = document.getElementById(`${entry.id} + button3`)
//         button1Text = document.getElementById(`${entry.id} + button1text`)

        button1.addEventListener('click', increaseCount1)
//         // button1.addEventListener('click', displayNumber)

        
//         // button2.addEventListener('click', increaseCount2)
//         // button3.addEventListener('click', increaseCount3)

        function increaseCount1 (e, id) {
            e.preventDefault()
            id = entry.id
            // count = entry.button1
            
            const numberData = {
                button1: count
            };
            
            const options = {
                method: 'POST',
                body: JSON.stringify(numberData),
                headers: {
                    "Content-Type" : "application/json"
                }
            };
            
            fetch(`http://localhost:3000/data/${id}/button1`, options)
            .then(r => console.log(r.json()))
            .catch(console.warn)
        }

}

    for (let entry of data) {
    // getting dynamically created id's to add click events
    let viewComments = document.getElementById(`${entry.id}`)
    viewComments.addEventListener('click', searchResults)

    let newComment = document.getElementById(`${entry.id} + form`);
    newComment.addEventListener('submit', addingComment);
    
        // on click of view comments, display these comments associated with the id
    function searchResults(e, id){
        id = entry.id
        let commentSection = document.getElementById(`${id} + commentSection`)
        e.preventDefault();
        commentSection.innerHTML = ""
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

    // on submit of comment form show the comments associated with the id
    function addingComment(e, id){
        id = entry.id
        e.preventDefault();
    
        const comment = {
            comments: e.target.message.value
        }
    
        console.log(comment)
    
        const options = {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                "Content-Type" : "application/json"
            }
        }
    
        console.log(options.body);
    
        
        
        fetch(`http://localhost:3000/data/${id}/comments`, options)
        .then(res => res.json())
        .catch(console.warn);
    }
}
}
