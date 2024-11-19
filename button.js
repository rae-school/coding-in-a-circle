console.log("file is working")

let backgroundButton = document.getElementById("button");

console.log(backgroundButton)

let specialLink = document.getElementById("special-link");

backgroundButton.addEventListener("click", function(event) {
    console.log("clicked!")
    document.body.classList.toggle("active")
    specialLink.classList.toggle("link-changed")
})

