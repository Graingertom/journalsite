const findGif = document.getElementById('searchForm')
let selectedImg = document.getElementById("selectedImg")

findGif.addEventListener('submit', displayGifs)

function displayGifs(e) {
    e.preventDefault();

    searchTerm = e.target.searchInput.value

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=qjWg9FdUGKToLMDWBaH9DiHGLVAsmTMj&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`)
    .then(function (response) {
        return(response.json())    
    })
    .then(function (newRes) {
        return(newRes.data)
    })
    .then(function (data) {
        document.getElementById("inner").innerHTML = ""
        for (let result of data) {
            const fillThis = document.getElementById("inner");
            const img = document.createElement("img")
            const imgUrl = result.images.downsized.url
            const imgId = result.id
            img.src = imgUrl
            img.id = imgId
            fillThis.appendChild(img)

            img.addEventListener('click', selectGif)

        
            function selectGif(e) {
                e.preventDefault()
                console.log(e)
                selectedImg.src = e.target.currentSrc
            }
        }

    })
    .catch(console.warn)
}




