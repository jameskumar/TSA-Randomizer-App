var mainDiv = document.getElementsByClassName('main')[0];
var rightArrow = document.getElementsByClassName('right-arrow')[0];
var leftArrow = document.getElementsByClassName('left-arrow')[0];
var action;

document.getElementById('wrapper').onclick = function () {
    changeArrow(direction());
};

function direction() {
    return ['left', 'right'][Math.floor(Math.random() * 2)];
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
    fadeIn(el1, 1);
    fadeOut(mainDiv, .5);
    fadeOut(el2, .1);
    action = setTimeout(function () {
        fadeOut(el1, 1);
        fadeIn(mainDiv, 1);
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
