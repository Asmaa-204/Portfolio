const navbar = document.querySelector(".navbar .container");
const links = document.querySelector(".links");
const menu = document.querySelector(".hamburger");

window.addEventListener("scroll", () => {
   if(window.scrollY > 40) {
      navbar.style.padding = "20px 0";
      navbar.style.maxHeight = "40px";
   }
   else
      navbar.style.padding = "40px 0";

});

menu.addEventListener("click", () => {
   links.classList.toggle("active")
})

links.forEach(link => {
   link.addEventListener("click", ()=> {
      link.classList.toggle("active");
   })
});



const projects = document.querySelectorAll(".project");
const buttons = document.querySelectorAll(".dropdown-btns *");

buttons.forEach(button => {
   button.addEventListener("click", filterContent);
});

function filterContent() {
   projects.forEach(project => {
      project.style.display = "none";
   });
      document.querySelectorAll(this.dataset.cat).forEach(element => {
      element.style.display = "block";
});
}


const allBtn = document.querySelector(".All-btn");
const dropDown = document.querySelector(".dropdown-btns");
const dropDownBtns = document.querySelectorAll(".dropdown-btns *");
allBtn.addEventListener("click", () => {
   dropDown.classList.toggle("active");
})

dropDownBtns.forEach(button => {
   button.addEventListener("click", () => {
      const allBtnContent = allBtn.innerHTML; 
      allBtn.innerHTML = `${button.innerHTML}`;
      dropDown.classList.toggle("active");
   })
});
