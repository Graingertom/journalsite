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
            })

    }
    catch (error) {
        console.log(error)
    }

}

// put results from database into homepage 

const fillPost = data => {

    for (let entry of data) {
        // Create elements that need to be repeated for each entry in the database
        const article = document.createElement("article")
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const img = document.createElement("img")
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
        const div = document.createElement("div")
        const commentBtn = document.createElement("button")
        const commentSction = document.createElement("div")
        const body = document.querySelector("body")

        // Create text nodes that fill parts with the necessary information
        const button1Number = document.createTextNode(`${entry.button1}`)
        const button2Number = document.createTextNode(`${entry.button2}`)
        const button3Number = document.createTextNode(`${entry.button3}`)
        const postTitle = document.createTextNode(`${entry.title}`);
        const textContent = document.createTextNode(`${entry.body}`);
        const comments = document.createTextNode("View Comments");

        // dynamically create the classes for the elements
        article.className = "posts"
        h2.className = "postTitle"
        section1.className = "textContent"
        section2.className = "interactiveComments"
        div.className = "d-grid gap-4 col-3 mx-auto"
        
        // Dynamically create the id where necessary for elements
        commentSction.id = `${entry.id} + commentSection`
        commentBtn.id = `${entry.id}`
        form.id = `${entry.id} + form`
        img.id = `${entry.id} + image`

        // adding in the attributes that come from bootstrap
        commentBtn.className = "btn btn2 btn-dark viewComs viewComments"
        commentBtn.type = "button"
        commentBtn.setAttribute('data-bs-toggle', "collapse")
        commentBtn.setAttribute('data-bs-target', "#collapseExample")
        commentBtn.setAttribute('aria-expanded', "false")
        commentBtn.setAttribute('aria-controls', "collapseExample")

        // adding in the attributes for the comment button text
        commentText.className = "addComment"
        commentText.type = "text"
        commentText.class = "addComment"
        commentText.name = "message"
        commentText.id = "message"
        commentText.placeholder = "Add your comment"

        // setting the attributes for the submit button, emoji buttons and their children
        button1.id = `button1`
        button1.className = "button"
        button1Text.id = `${entry.id} + button1text`
        button2.id = `${entry.id} + button2`
        button2.className = "button"
        button3.id = `${entry.id} + button3`
        button3.className = "button"
        submitBtn.type = "submit"
        submitBtn.className = "submitBtn"
        submitBtn.value = "Comment"
        
        
        // dynamically styling the emoji buttons
        button1.src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Smiling_grande.png?v=1571606089"
        button1.style.width = "30px"
        button1.style.height = "30px"
        button2.src = "https://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_grande.png?v=1571606089"
        button2.style.width = "30px"
        button2.style.height = "30px"
        button3.src = "https://www.clipartmax.com/png/middle/86-869267_3-pack-heart-eyes-emoji-love-eyes-emoji.png"
        button3.style.width = "30px"
        button3.style.height = "30px"
        


        // adding each element to the page 
        body.appendChild(article) // adds the article that everything sits in
        article.appendChild(h2) // adds the h2 tag to the article
        article.appendChild(section1) // adds the first section within the article
        article.appendChild(section2) // adds the second section within the article
        article.appendChild(div) // adds the div that sits in the article
        
        
        h2.appendChild(postTitle); // adds the title of the posted post to the h2 tag
        section1.appendChild(img) // adds the selected GIF to section 1
        section1.appendChild(p) // adds the post body to section 1
        p.appendChild(textContent) // fills the post body with the posted text
        commentBtn.appendChild(comments) //to change?????
        section2.appendChild(form) // adds the comments form to section 2
        form.appendChild(commentText) // adds the input to type comments to the form
        section2.appendChild(button1) // adds the emoji button 1 to the section
        section2.appendChild(button1Text) // adds the text associated with emoji button 1 to the section
        button1Text.appendChild(button1Number) // fills the button 1 text
        section2.appendChild(button2) // adds the emoji button 2 to the section
        section2.appendChild(button2Text) // adds the text associated with emoji button 2 to the section
        button2Text.appendChild(button2Number) // fills the button 2 text
        section2.appendChild(button3) // adds the emoji button 3 to the section
        section2.appendChild(button3Text) // adds the text associated with emoji button 3 to the section
        button3Text.appendChild(button3Number) // fills the button 3 text
        form.appendChild(submitBtn) // adds the submit button for the comments to the form
        div.appendChild(commentBtn) // adds the view comments button to the div at the end of the article
        div.appendChild(commentSction) // adds the drop down comments section to the div at the end of the article
        img.src = `${entry.image}` // uses the selected gif from the post to display on the image



    }
}
