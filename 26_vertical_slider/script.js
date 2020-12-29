const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".image-slide");
const slideLeft = document.querySelector(".text-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;
let activeSlideIndex = 0;

// slider length - 1 to get to zero based
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    // When click up button
    if(direction === 'up') {
        activeSlideIndex++
        // When at the end, go back tot the start
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    }  else if(direction === 'down') {
        activeSlideIndex--
        
        // When at the end 
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    // To go up
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    // To go down
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}

