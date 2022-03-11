document.addEventListener("DOMContentLoaded", fill);
function fill() {
    try {
        fetch('https://fpjournaling.herokuapp.com/data')
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

const events = data => {

    for (let entry of data) {
        button1 = document.getElementById(`${entry.id} + button1`)
        button2 = document.getElementById(`${entry.id} + button2`)
        button3 = document.getElementById(`${entry.id} + button3`)

        button1.addEventListener('click', increaseCount1, {once : true})
        button2.addEventListener('click', increaseCount2, {once : true})
        button3.addEventListener('click', increaseCount3, {once : true})

        function increaseCount1 (e) {
            e.preventDefault()
            let count = e.target.nextSibling.textContent
            count++
            e.target.nextSibling.textContent = count
            
              
            
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
            
            fetch(`https://fpjournaling.herokuapp.com/data/${entry.id}/button1`, options)
            .then(r => r.json())
            .catch(console.warn)
        
        }

        function increaseCount2 (e) {
            e.preventDefault()
            let count = e.target.nextSibling.textContent
            count++
            e.target.nextSibling.textContent = count
            
              
            
            const numberData = {
                button2: count
            };
            
            const options = {
                method: 'POST',
                body: JSON.stringify(numberData),
                headers: {
                    "Content-Type" : "application/json"
                }
            };
            
            fetch(`https://fpjournaling.herokuapp.com/data/${entry.id}/button2`, options)
            .then(r => r.json())
            .catch(console.warn)
        
        }

        function increaseCount3 (e) {
            e.preventDefault()
            let count = e.target.nextSibling.textContent
            count++
            e.target.nextSibling.textContent = count
            
              
            
            const numberData = {
                button3: count
            };
            
            const options = {
                method: 'POST',
                body: JSON.stringify(numberData),
                headers: {
                    "Content-Type" : "application/json"
                }
            };
            
            fetch(`https://fpjournaling.herokuapp.com/data/${entry.id}/button3`, options)
            .then(r => r.json())
            .catch(console.warn)
        
        }
}

    for (let entry of data) {
    
    let viewComments = document.getElementById(`${entry.id}`)
    viewComments.addEventListener('click', searchResults)

    let newComment = document.getElementById(`${entry.id} + form`);
    newComment.addEventListener('submit', addingComment);
    
    function searchResults(e, id){
        id = entry.id
        console.log(e)
        let commentSection = e.target.nextSibling
        e.preventDefault();
        commentSection.innerHTML = ""
        fetch(`https://fpjournaling.herokuapp.com/data/${id}/comments`)
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
        id = entry.id
        e.preventDefault();
        console.log(e)
        let commentSection = document.getElementById(id).nextSibling
    
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
    
        
        
        fetch(`https://fpjournaling.herokuapp.com/data/${id}/comments`, options)
        .then(res => res.json())
        .then(res => {
                let addComments = document.createElement('div');
                addComments.classList.add('card', 'card-body');
                addComments.textContent = e.target.message.value;
                commentSection.appendChild(addComments);
        })
        
        .catch(console.warn);
    }
}
}
