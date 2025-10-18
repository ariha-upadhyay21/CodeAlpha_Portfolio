const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () =>{
    if(window.scrollY > 200) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
});


const texts = ["Frontend Development", "Java & Problem-Solving", "MERN Stack"];
let index = 0;
let charIndex = 0;
let currText = "";
let isDeleting = false;
const typingSpeed = 100;
const eraseSpeed = 50;
const delayBetween = 1500;
const typingElement = document.getElementById("typing");
function typeEffect() {
    currText = texts[index];
    if(!isDeleting) {
        typingElement.textContent = currText.substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currText.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetween);
            return;
        }
    } else {
        typingElement.textContent = currText.substring(0, charIndex-1);
        charIndex--;

        if(charIndex === 0) {
            isDeleting = false;
            index =  (index+1)% texts.length;
        }
    }

    const speed = isDeleting ? eraseSpeed : typingSpeed;
    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

