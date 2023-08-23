// General UI


const UI = (() => {

    //Header
    const downloadBtn = document.querySelector(".download-btn");

    // Selecting Items
    const contactBtn = document.querySelector(".contact-btn");

    //reviews section
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const reviews = document.querySelectorAll(".review");


    //form section

    const form = document.querySelector('.form');
    const nameFld = document.querySelector('[name=name]');
    const emailFld = document.querySelector('[name=email]');
    const messageFld = document.querySelector('[name=message]');
    const submitBtn = document.querySelector('.submit-btn');
    const nameFeed = document.querySelector('.name');
    const emailFeed = document.querySelector('.email');
    const messageFeed = document.querySelector('.message');
    const submitFeed = document.querySelector('.submit');
    const closeBtn = document.querySelector('.close');

    return {
        nextBtn,
        prevBtn,
        reviews,
        form,
        nameFld,
        emailFld,
        messageFld,
        submitBtn,
        nameFeed,
        emailFeed,
        messageFeed,
        submitFeed,
        closeBtn,
        contactBtn,
        downloadBtn
    }
})();



// Header

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

// links.children.forEach(link => {
//    link.addEventListener("click", ()=> {
//       link.classList.toggle("active");
//    })
// });



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


UI.downloadBtn.addEventListener('click' , () => {
    const download = document.createElement('a');

    download.href = './assets/abstract/halzona.svg';
    download.download = 'halzona.svg';
    download.style.display = 'none'

    document.body.appendChild(download)

    download.click();

    console.log('started downloading..')

    document.body.removeChild(download);
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


// Form

const Form = (() => {

    async function sendMail(name , email , message){
        try{

            const mailMessage = `Name : ${name} \n Email : ${email} \n Message : ${message}`;

            const mail = {
                Host : "smtp.elasticemail.com",
                Username : "shehab299@outlook.com",
                Password : "6C88C33A404F9E5500A3C3E5B31644A43ABF",
                To : 'shehab299@outlook.com',
                From : 'shehab299@outlook.com',
                Subject : `New Message from ${name}`,
                Body : mailMessage
            };
            
            const response = await Email.send(mail);
            alert(response);
        }
        catch(err){
            alert(err.message);
        }

    }


    function validateForm(){
        let isValid = true;

        if(UI.nameFld.value === '' || UI.nameFld.value.length < 3){
            isValid = false;
        }
        
        if(UI.emailFld.value === '' || !UI.emailFld.value.includes('@')){
            isValid = false;
        }
        
        if(UI.messageFld.value === '' || UI.messageFld.value.length < 10){
            isValid = false;
        }

        return isValid;
    }


    function updateText(element, text){
        element.classList.add('animate-text');
        element.innerText = text;
        
        setTimeout(() => {
            element.classList.remove('animate-text');
        }, 200);
    };

    
    UI.nameFld.addEventListener('input' , () => {
        if(UI.nameFld.value === ''){
            updateText(UI.nameFeed,'Name cannot be empty');
        }
        else if(UI.nameFld.value.length < 3){
            updateText(UI.nameFeed,'Name must be atleast 3 characters long')
        }
        else{   
            updateText(UI.nameFeed,'');
        }
    });

    UI.emailFld.addEventListener('input' , () => {
        if(UI.emailFld.value === ''){
            updateText(UI.emailFeed,'Email cannot be empty');
        }
        else if(!UI.emailFld.value.includes('@')){
            updateText(UI.emailFeed,'Email must contain @');
        }
        else{   
            updateText(UI.emailFeed,'');
        }
    });

    UI.messageFld.addEventListener('input' , () => {
        if(UI.messageFld.value === ''){
            updateText(UI.messageFeed,'Message cannot be empty');
        }
        else if(UI.messageFld.value.length < 10){
            updateText(UI.messageFeed,'Message must be atleast 10 characters long')
        }
        else{   
            updateText(UI.messageFeed,'');
        }
    });

    UI.form.addEventListener('submit' , (e) => {

        if(validateForm()){
            e.preventDefault();
            sendMail(UI.nameFld.value , UI.emailFld.value , UI.messageFld.value);
        }
        else{   
            e.preventDefault();
            updateText(UI.submitFeed , 'Please fill the form correctly');
        }
    });

    return {}
})()






UI.closeBtn.addEventListener('click' , () => {
    UI.form.classList.remove('visible-form');
    UI.form.classList.add('hidden-form');
});

document.addEventListener('click' , (e) => {
    if(e.target === UI.contactBtn)
    {
        UI.form.classList.remove('hidden-form');
        UI.form.classList.add('visible-form');
    }
    else if(e.target !== UI.form && UI.form.classList.contains('visible-form'))
    {
        UI.form.classList.remove('visible-form');
        UI.form.classList.add('hidden-form');
    }
})