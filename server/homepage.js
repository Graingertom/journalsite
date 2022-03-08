

document.getElementsByClassName("btn btn-warning").addEventListener("submit", event => {    //maybe we should change button class name
                                                                                            //unsure if this is correct

fetch('http://localhost:3000/data')
    .then( (response) => {
        return response.json()
    })
    .then( (data) => {
        document.getElementById("toShow").innerHTML = ""
    })



})




// put results from database into hompage - unsure how to link

const fillPost = data => {

    for (let entry of data) {

        const section = document.getElementById("toShow");
        const h2 = document.createElement("h2");
        //const img = document.createElement("img");     This path needs to be for the gif ?? not part of the p?
        const p = document.createElement("p");
        //const form =                                   Path to create comment section ??
        const h3 = document.createElement("h3")

        const postTitle = document.createTextNode(`${entry.postTitle}`);
        const textContent = document.createTextNode(`${entry.textContent}`);
        const comments = document.createTextNode("View Comments");

        h2.appendChild(postTitle);
        //img.appendChild() Surely the Gif is part of the text content ??
        p.appendChild(textContent)
        h3.appendChild(comments)
    }
}

