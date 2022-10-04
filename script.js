
let navToggleBtn = document.getElementById("navbar-menu-btn");
let navbar = document.getElementById("navbar-list");

navToggleBtn.addEventListener("click", function(){
    if(navbar.style.display === "none") {
        navbar.style.display = "flex";
    }else {
        navbar.style.display = "none";
    } 
}) 

