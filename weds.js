console.log("file is working")



// hamburger menu
let hamburgerOpen = false;
let navigation = document.getElementById("navigation");
let hamburgermenu = document.getElementById("hamburger-icon");

hamburgermenu.addEventListener("click", function(event) {
    if(hamburgerOpen) {
        navigation.style.display = "none";
        hamburgerOpen = false;
        hamburgermenu.classList.toggle("active")
    } else {
        navigation.style.display = "block";
        hamburgerOpen = true;
        hamburgermenu.classList.toggle("active")
    }
})



// toggle on and off
let backgroundButton = document.getElementById("button");
let active = "off";
let image1 = document.getElementById("image-1");
let image2 = document.getElementById("image-2");

backgroundButton.addEventListener("click", function(event) {
    console.log("clicked!")
    document.body.classList.toggle("active")

    if(active == "off") {
        image1.src="images/3.jpg"
        image2.src="images/6.jpg"
        active = "on"
    } else {
        image1.src="images/1.jpg"
        image2.src="images/2.png"
        active = "off"
    }
})



//scroll events

let first = document.getElementById('first-layer');
let second = document.getElementById('second-layer');
let third = document.getElementById('third-layer');

document.addEventListener("scroll", function(event) {
    let topScroll = window.scrollY;

    first.style.top = 0.4 * topScroll + 'px';
    second.style.top = 0.2 * topScroll + 'px'; 
    third.style.top = 0.1 * topScroll + 'px';
});