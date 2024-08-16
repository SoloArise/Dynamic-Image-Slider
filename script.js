const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const background = document.querySelector('.slider-background');
let currentIndex = 0;
let slideInterval;

document.querySelector('.next').addEventListener('click', () => {
    nextSlide();
    resetAutoSlide(); 
});

document.querySelector('.prev').addEventListener('click', () => {
    prevSlide();
    resetAutoSlide(); 
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlidePosition();
        resetAutoSlide(); 
    });
});

function nextSlide() {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlidePosition();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length;
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
    setBlurredBackground();
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function setBlurredBackground() {
    const bgImage = slide[currentIndex].style.backgroundImage;
    background.style.backgroundImage = bgImage;
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000); 
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide(); 
}

setBlurredBackground();
startAutoSlide();
