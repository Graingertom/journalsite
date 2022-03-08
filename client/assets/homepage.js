


document.addEventListener("DOMContentLoaded", fill)
//unsure if this is correct
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
            })

    }
    catch (error) {
        console.log(error)
    }

}





// put results from database into homepage - unsure how to link

const fillPost = data => {

    for (let entry of data) {

        const article = document.createElement("article")
        // const section = document.getElementById("toShow");
        const h2 = document.createElement("h2");
        //const img = document.createElement("img");    // This path needs to be for the gif ?? not part of the p?
        const p = document.createElement("p");
        const section = document.createElement("section")
        const form = document.createElement("form")
        const commentText = document.createElement("input")
        const button1 = document.createElement("input")
        const button2 = document.createElement("input")
        const button3 = document.createElement("input")
        const submitBtn = document.createElement("input")
        const h3 = document.createElement("h3") //to change
        const body = document.querySelector("body")

        const postTitle = document.createTextNode(`${entry.title}`);
        const textContent = document.createTextNode(`${entry.body}`);
        const comments = document.createTextNode("View Comments");
        // or add gif choice here?

        article.className = "posts"
        h2.className = "postTitle"
        p.className = "textContent"
        section.className = "interactiveComments"
        
        commentText.className = "addComment"
        button1.type = "button"
        button2.type = "button"
        button3.type = "button"
        submitBtn.type = "submit"



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
        p.appendChild(textContent)
        h3.appendChild(comments) //to change
        section.appendChild(form)
        form.appendChild(commentText)
        form.appendChild(button1)
        form.appendChild(button2)
        form.appendChild(button3)
        form.appendChild(submitBtn)




        article.appendChild(h2)
        article.appendChild(p)
        article.appendChild(section)
        article.appendChild(h3)

    }
}

