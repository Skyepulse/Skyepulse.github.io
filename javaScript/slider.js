const mediaURL = '../media/'
const images = [mediaURL + 'slider1.png', mediaURL + 'slider2.png', mediaURL + 'slider3.png', mediaURL + 'slider4.png']

const videoURL = 'https://githubpagesvideos.s3.eu-north-1.amazonaws.com/sliderVideo.mp4'
const isVideo = false

const center = document.querySelector('#center')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

const leftContainer = document.querySelector('#leftContainer')
const rightContainer = document.querySelector('#rightContainer')
let currentCounter = 0

let shouldMoveLeft = false
let shouldMoveRight = false

document.addEventListener('DOMContentLoaded', function () {
    leftContainer.addEventListener('click', function () {
        animateOnClick(this, 0);
        moveCarouselLeft();
    });
    rightContainer.addEventListener('click', function () {
        animateOnClick(this, 1);
        moveCarouselRight();
    });

    leftContainer.addEventListener('mouseover', function () {
        animateOnHover(this, 0);
        shouldMoveLeft = true
    });
    rightContainer.addEventListener('mouseover', function () {
        animateOnHover(this, 1);
        shouldMoveRight = true
    });

    leftContainer.addEventListener('mouseout', function () {
        animateHoverEnd(this, 0);
        shouldMoveLeft = false
    });
    rightContainer.addEventListener('mouseout', function () {
        animateHoverEnd(this, 1);
        shouldMoveRight = false
    });
});

function animateOnHover(element, leftOrRight) {
    // Add the 'animate' class to the element
    switch (leftOrRight) {
        case 0:
            element.classList.add('animateLeftMove');
            break;
        case 1:
            element.classList.add('animateRightMove');
            break;
    }
}

function animateHoverEnd(element, leftOrRight) {
    // Add the 'animate' class to the element
    switch (leftOrRight) {
        case 0:
            element.classList.remove('animateLeftMove');
            break;
        case 1:
            element.classList.remove('animateRightMove');
            break;
    }
}

function animateOnClick(element, leftOrRight) {
    animateHoverEnd(element, leftOrRight);
    // Add the 'animate' class to the element
    switch (leftOrRight) {
        case 0:
            element.classList.add('animateLeftClick');
            break;
        case 1:
            element.classList.add('animateRightClick');
            break;
    }
    
    // Wait for the animation to finish and then remove the 'animate' class
    element.addEventListener('animationend', function() {
        switch (leftOrRight) {
            case 0:
                element.classList.remove('animateLeftClick');
                if(shouldMoveLeft) animateOnHover(element, 0);
                break;
            case 1:
                element.classList.remove('animateRightClick');
                if(shouldMoveRight) animateOnHover(element, 1);
                break;
        }
    }, { once: true }); // The listener is removed after it's executed
}

function moveCarouselLeft(){
    currentCounter = (currentCounter - 1 + images.length) % images.length
    updateImages()
}

function moveCarouselRight(){
    currentCounter = (currentCounter + 1) % images.length
    updateImages()
}

function updateImages(){
    center.querySelector('img').src = images[currentCounter]
    left.querySelector('img').src = images[(currentCounter - 1 + images.length) % images.length]
    right.querySelector('img').src = images[(currentCounter + 1) % images.length]
}