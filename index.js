const navbar = document.querySelector(".navbar .container");
window.addEventListener("scroll", () => {
    if(window.scrollY > 40)
    navbar.style.padding = "20px 0";
       else
       navbar.style.padding = "40px 0";
});

const links = document.querySelector(".links");
const menu = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
   links.classList.toggle("hide")
})