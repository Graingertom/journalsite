let button = document.getElementById("button1"),
count = 0;
button.onclick = function(e) {
    e.preventDefault()
    count += 1;
    button.innerHTML = count;
    console.log(button.innerHTML)
};