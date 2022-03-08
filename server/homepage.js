

document.addEventListener("DOMContentLoaded", fill)    
                                                                                            //unsure if this is correct
function fill() {
fetch('http://localhost:3000/data')
    .then( (response) => {
        return response.json()
    })
    .then( (data) => {
        document.getElementById("toShow").innerHTML = ""
        fillPost(data)
    })



}





// put results from database into homepage - unsure how to link

const fillPost = data => {

    for (let entry of data) {

        const section = document.getElementById("toShow");
        const h2 = document.createElement("h2");
        //const img = document.createElement("img");     This path needs to be for the gif ?? not part of the p?
        const p = document.createElement("p");
        //const form = document.createElement("form")   
        //const commentText = document.createElement("type='text'") 
        //const button1 = document.createElement("type='button'") 
        //const button2 = document.createElement("type='button'") 
        //const button3 = document.createElement("type='button'") 
        //const submitBtn = document.createElement("type='submit'")                             Path to create comment section ??
        const h3 = document.createElement("h3")

        const postTitle = document.createTextNode(`${entry.postTitle}`);
        const textContent = document.createTextNode(`${entry.textContent}`);
        const comments = document.createTextNode("View Comments");
        //const form
        //const emoji1 = document.createTextNode(":)");
        //const emoji2 = document.createTextNode(":(");
        //const emoji3 = document.createTextNode(":O");

        h2.appendChild(postTitle);
        //img.appendChild() Surely the Gif is part of the text content ??
        p.appendChild(textContent)
        h3.appendChild(comments)
        //form
        //button1.appendChild(emoji1)
        //button2.appendChild(emoji2)
        //button3.appendChild(emoji3)
    }
}

