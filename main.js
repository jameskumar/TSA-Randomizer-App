var mainDiv = document.getElementsByClassName('main')[0];
var rightArrow = document.getElementsByClassName('right-arrow')[0];
var leftArrow = document.getElementsByClassName('left-arrow')[0];
var action;

document.getElementById('wrapper').onclick = function () {
    changeArrow(direction());
};

function direction() {
    return ['left', 'right'][Math.floor(window.crypto.getRandomValues(new Uint8Array(1)) / 255 * 2)];
}

function changeArrow(direction) {
    clearTimeout(action);
    if (direction === 'left') {
        fade(leftArrow, rightArrow);
    } else {
        fade(rightArrow, leftArrow);
    }
}

function fade(el1, el2) {
    fadeOut(el1, 0);
    fadeOut(el2, 0);
    fadeIn(el1, .6);
    fadeOut(mainDiv, .5);
    fadeOut(el2, .1);
    action = setTimeout(function () {
        fadeOut(el1, .6);
        fadeIn(mainDiv, .7);
    }, 1500);
}

function fadeOut(element, seconds){
    element.style.transition = "opacity " + seconds + "s";
    element.style.opacity = 0;
}

function fadeIn(element, seconds) {
    element.style.transition = "opacity " + seconds + "s";
    element.style.opacity = 1;
}
