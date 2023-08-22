// General UI


const UI = (() => {
    // Selecting Items

    //reviews section
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const reviews = document.querySelectorAll(".review");


    return {
        nextBtn,
        prevBtn,
        reviews
    }
})();



// Header

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


// Testmonials


const Reviews = (() => {

    const Status = {
        active : 'active',
        next : 'near-active',
        far : 'far-active'
    }

    let activeIndex = 0;

    function updateReviews(activeIndex){


        UI.reviews.forEach((val,index) => {
            if(index === activeIndex){
                UI.reviews[index].classList.add(Status.active);
                UI.reviews[index].classList.remove(Status.next);
                UI.reviews[index].classList.remove(Status.far);
            }
            else if(Math.abs(index - activeIndex) === 1){
                UI.reviews[index].classList.add(Status.next);
                UI.reviews[index].classList.remove(Status.far);
                UI.reviews[index].classList.remove(Status.active);
            }
            else{
                UI.reviews[index].classList.add(Status.far)
                UI.reviews[index].classList.remove(Status.active)
                UI.reviews[index].classList.remove(Status.next)
            }   
        })
    }

    UI.nextBtn.addEventListener('click' , () => {
        activeIndex = (activeIndex + 1) % UI.reviews.length;
        updateReviews(activeIndex);
    })

    UI.prevBtn.addEventListener('click' , () => {
        if(activeIndex === 0){
            activeIndex = 3;
        }

        activeIndex--;

        updateReviews(activeIndex);
    })

    return {};

})();

