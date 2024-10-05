let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
   
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
   
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }
    
   
    slides[slideIndex - 1].style.display = "block";
    
   
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
    
 
    setTimeout(showSlides, 3000);
}

    
    
    function currentSlide(n) {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");
    
       
        slideIndex = n - 1; 
        
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slides[slideIndex].style.display = "block"; 
    
        
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", ""); 
        }
        dots[slideIndex].className += " active"; 
    }

   
const textLines = [
"Siddhartha",
"Academy of",
"Higher",
"Education"
]; 
const highlightLetters = ["S", "A", "H", "E"]; 
const delayBeforeStart = 500; 
const typingSpeed = 150; 
const highlightDelay = 500; 

let lineIndex = 0; 
let currentLetterIndex = 0; 
let textContainer = document.getElementById("typewriter-text");

function typeText() {
if (lineIndex < textLines.length) {
if (currentLetterIndex < textLines[lineIndex].length) {
    textContainer.innerHTML += textLines[lineIndex][currentLetterIndex]; 
    currentLetterIndex++;
    setTimeout(typeText, typingSpeed); 
} else {
    
    textContainer.innerHTML += "<br>"; 
    lineIndex++; 
    currentLetterIndex = 0; 
    setTimeout(typeText, typingSpeed); 
}
} else {

setTimeout(highlightText, highlightDelay);
}
}

function highlightText() {

const highlightedText = `
<span class="highlight">S</span>iddhartha<br>
<span class="highlight">A</span>cademy of<br>
<span class="highlight">H</span>igher<br>
<span class="highlight">E</span>ducation
`;

textContainer.innerHTML = highlightedText; 
        

setTimeout(() => {
const highlightedSpans = textContainer.querySelectorAll('.highlight');
highlightedSpans.forEach(span => {
    span.classList.add('final'); 
});
}, 100); 
}



setTimeout(() => {
typeText();
}, delayBeforeStart);