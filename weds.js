console.log("file is working")

let backgroundButton = document.getElementById("button");

backgroundButton.addEventListener("click", function(event) {
    console.log("clicked!")
    document.body.classList.toggle("active")
})
