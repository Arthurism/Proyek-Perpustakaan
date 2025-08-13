let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

// Auto Slide setiap 3 detik
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 3000);
