

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
                fillPost(data)
                events(data)
            })

    }
    catch (error) {
        console.log(error)
    }

}





// put results from database into homepage 

const fillPost = data => {

    for (let entry of data) {

        const article = document.createElement("article")
        // const section = document.getElementById("toShow");
        const h2 = document.createElement("h2");
        //const img = document.createElement("img");    // This path needs to be for the gif ?? not part of the p?
        const p = document.createElement("p");
        const img = document.createElement("img")
        const section1 = document.createElement("section")
        const section2 = document.createElement("section")
        const form = document.createElement("form")
        const commentText = document.createElement("input")
        const button1 = document.createElement("input")
        const button2 = document.createElement("input")
        const button3 = document.createElement("input")
        const submitBtn = document.createElement("input")
        //const h3 = document.createElement("h3") //to change
        const div = document.createElement("div")
        const commentBtn = document.createElement("button")
        const commentSction = document.createElement("div")
        const body = document.querySelector("body")

        const postTitle = document.createTextNode(`${entry.title}`);
        const textContent = document.createTextNode(`${entry.body}`);
        const comments = document.createTextNode("View Comments");
        // or add gif choice here?

        article.className = "posts"
        h2.className = "postTitle"
        section1.className = "textContent"
        section2.className = "interactiveComments"

        div.className = "d-grid gap-4 col-3 mx-auto"

        commentSction.id = `${entry.id} + commentSection`
        commentBtn.id = `${entry.id}`
        form.id = `${entry.id} + form`
        img.id = `${entry.id} + image`
        commentBtn.className = "btn btn2 btn-dark viewComs viewComments"
        commentBtn.type = "button"
        commentBtn.setAttribute('data-bs-toggle', "collapse")
        commentBtn.setAttribute('data-bs-target', "#collapseExample")
        commentBtn.setAttribute('aria-expanded', "false")
        commentBtn.setAttribute('aria-controls', "collapseExample")
        
        
        
        commentText.className = "addComment"
        button1.type = "button"
        button1.className = "button"
        button2.type = "button"
        button2.className = "button"
        button3.type = "button"
        button3.className = "button"
        submitBtn.type = "submit"
        submitBtn.className ="submitBtn"



        commentText.type = "text"
        commentText.class = "addComment"
        commentText.name = "message"
        commentText.id = "message"
        commentText.placeholder = "Add your comment"
        button1.value = ":)"
        button2.value = ":("
        button3.value = ":O"
        submitBtn.type = "submit"
        submitBtn.value = "Comment"
        //gif



        body.appendChild(article)
        h2.appendChild(postTitle);
        // //img.appendChild() Surely the Gif is part of the text content ??
        section1.appendChild(img)
        section1.appendChild(p)
        p.appendChild(textContent)
        commentBtn.appendChild(comments) //to change
        section2.appendChild(form)
        form.appendChild(commentText)
        form.appendChild(button1)
        form.appendChild(button2)
        form.appendChild(button3)
        form.appendChild(submitBtn)
        div.appendChild(commentBtn)
        div.appendChild(commentSction)
        img.src = `${entry.image}`




        article.appendChild(h2)
        article.appendChild(section1)
        article.appendChild(section2)
        article.appendChild(div)

    }
}

const events = data => {

    for (let entry of data) {
    let viewComments = document.getElementById(`${entry.id}`)
    viewComments.addEventListener('click', searchResults)

    let newComment = document.getElementById(`${entry.id} + form`);
    newComment.addEventListener('submit', addingComment);
    

    function searchResults(e, id){
        id = entry.id
        let commentSection = document.getElementById(`${id} + commentSection`)
        e.preventDefault();
        commentSection.innerHTML = ""
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



// // emoji like counter

// //add on click event for each emoji
// //ensure matches id of post
// //toggle emoji count (if else)
// //


// emojis.forEach(element => {
//     emojis.append(element)
// })





let button = document.getElementById("button1"),
count = 0;
button.onclick = function(e) {
    e.preventDefault()
    count += 1;
    button.innerHTML = ":) " + count;
    console.log(button.innerHTML)
};

