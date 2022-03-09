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
        const pImg = document.createElement("p")
        const section1 = document.createElement("section")
        const section2 = document.createElement("section")
        const form = document.createElement("form")
        const commentText = document.createElement("input")
        const button1 = document.createElement("img")
        const button2 = document.createElement("img")
        const button3 = document.createElement("img")
        const button1Text = document.createElement("span")
        const button2Text = document.createElement("span")
        const button3Text = document.createElement("span")
        const submitBtn = document.createElement("input")
        //const h3 = document.createElement("h3") //to change
        const div = document.createElement("div")
        const commentBtn = document.createElement("button")
        const body = document.querySelector("body")

        const button1Number = document.createTextNode(`${entry.button1}`)
        const button2Number = document.createTextNode(`${entry.button2}`)
        const button3Number = document.createTextNode(`${entry.button3}`)
        const postTitle = document.createTextNode(`${entry.title}`);
        const textContent = document.createTextNode(`${entry.body}`);
        const comments = document.createTextNode("View Comments");
        const imageContent = document.createTextNode("Image should be here")
        // or add gif choice here?

        article.className = "posts"
        h2.className = "postTitle"
        section1.className = "textContent"
        section2.className = "interactiveComments"

        div.className = "d-grid gap-4 col-3 mx-auto"

        commentBtn.id = "viewComments"
        commentBtn.className = "btn btn2 btn-dark viewComs"
        commentBtn.type = "button"
        commentBtn.setAttribute('data-bs-toggle', "collapse")
        commentBtn.setAttribute('data-bs-target', "#collapseExample")
        commentBtn.setAttribute('aria-expanded', "false")
        commentBtn.setAttribute('aria-controls', "collapseExample")



        commentText.className = "addComment"
        button1.id = `button1`
        button1.className = "button"
        button1Text.id = `${entry.id} + button1text`
        button2.id = `${entry.id} + button2`
        button2.className = "button"
        button3.id = `${entry.id} + button3`
        button3.className = "button"
        submitBtn.type = "submit"
        submitBtn.className = "submitBtn"



        commentText.type = "text"
        commentText.class = "addComment"
        commentText.name = "message"
        commentText.id = "message"
        commentText.placeholder = "Add your comment"
        button1.src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_grande.png?v=1571606089"
        button1.style.width = "30px"
        button1.style.height = "30px"
        button2.src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_grande.png?v=1571606089"
        button2.style.width = "30px"
        button2.style.height = "30px"
        button3.src = "https://www.clipartmax.com/png/middle/86-869267_3-pack-heart-eyes-emoji-love-eyes-emoji.png"
        button3.style.width = "30px"
        button3.style.height = "30px"
        submitBtn.type = "submit"
        submitBtn.value = "Comment"
        //gif



        body.appendChild(article)
        h2.appendChild(postTitle);
        // //img.appendChild() Surely the Gif is part of the text content ??
        section1.appendChild(pImg)
        section1.appendChild(p)
        p.appendChild(textContent)
        pImg.appendChild(imageContent)
        commentBtn.appendChild(comments) //to change
        section2.appendChild(form)
        form.appendChild(commentText)
        section2.appendChild(button1)
        section2.appendChild(button1Text)
        button1Text.appendChild(button1Number)
        section2.appendChild(button2)
        section2.appendChild(button2Text)
        button2Text.appendChild(button2Number)
        section2.appendChild(button3)
        section2.appendChild(button3Text)
        button3Text.appendChild(button3Number)
        form.appendChild(submitBtn)
        div.appendChild(commentBtn)




        article.appendChild(h2)
        article.appendChild(section1)
        article.appendChild(section2)
        article.appendChild(div)

    }
}

const events = data => {

    for (let entry of data) {
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
}

// const viewComments = document.querySelector('#viewComments');
// const newComment = document.querySelector('#form');
// const commentSection = document.querySelector('.commentSection');

// viewComments.addEventListener('click', searchResults);
// newComment.addEventListener('submit', addingComment);

// function searchResults(e, id){
//     commentSection.innerHTML = ""
//     e.preventDefault();
//     id = articleID;
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
//     };

//     console.log(comment)

//     const options = {
//         method: 'POST',
//         body: JSON.stringify(comment),
//         headers: {
//             "Content-Type" : "application/json"
//         }
//     };

//     console.log(options.body);

//     id = articleID;

//     fetch(`http://localhost:3000/data/${id}/comments`, options)
//     .then(res => console.log(res.json()))
//     .catch(console.warn);
// }








// // emoji like counter

// //add on click event for each emoji
// //ensure matches id of post
// //toggle emoji count (if else)
// //


// fetch('http://localhost:3000/data/${id}/button1')
//     .then((res) => {
//         res.json()
//     })
//     .then()











// let button = document.getElementById("button1"),
// count = 0;
// button.onclick = function(e) {
//     e.preventDefault()
//     count += 1;
//     button.innerHTML = ":) " + count;
//     console.log(button.innerHTML)
// };
















// function addEmoji1() {
//     emojis.addEventListener("click", () => {
//         e.preventDefault()
//         const id = emojis.findId(element => element.id === postData.id)
//         count += 1;
//         button.innerHTML = ":) " + count;
//         console.log(button.innerHTML)

