"use strict";
const image = document.querySelector("img#slider__image");
const images = [
  {
    src: "./images/img",
  },
  {
    src: "./images/img",
  },
  {
    src: "./images/img",
  },
  {
    src: "./images/img",
  },
];
const div = document.createElement("div");
let time = 3000;

const sliderPanel = document.querySelector(".slider__control-panel");
const dots = [];

function createDots() {
  for (let i = 0; i < images.length; i++) {
    const span = document.createElement("span");
    sliderPanel.appendChild(span);
    dots.push(span);
  }
  changeSlide();
}
let counter = 0;
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");

function Loader() {
  if (div.children.length) {
    const children = [...div.children];
    children.forEach((kid) => {
      kid.remove();
    });
  }
  const loaderSpan = document.createElement("span");
  div.className = "slider__loader";
  sliderPanel.prepend(div);
  div.appendChild(loaderSpan);
  loaderSpan.style.animationName = "fillLoader";
  loaderSpan.style.animationDuration = time / 1000 + "s";
  loaderSpan.style.animationTimingFunction = "linear";
}
function changeSlide() {
  Loader();
  if (counter == images.length) {
    counter = 0;
  }
  // console.log(counter);
  image.src = `${images[counter].src}${counter + 1}.jpg`;

  // dots
  const index = dots.findIndex((dot) => {
    return dot.classList.contains("active");
  });
  if (index >= 0) {
    dots[index].classList.remove("active");
  }
  dots[counter].classList.add("active");
  // loaderSpan.style.animation = "fillLoader 3s 3s linear infinite";
  // play = "running";

  counter++;
}
let intervalId = setInterval(changeSlide, time);
leftArrow.addEventListener("click", changeByHand);
rightArrow.addEventListener("click", changeByHand);
function changeByHand(e) {
  clearInterval(intervalId);
  if (this.id == "left-arrow") {
    counter -= 2;
    if (counter < 0) {
      counter = images.length - 1;
    }

    changeSlide();
    intervalId = setInterval(changeSlide, time);
  } else if (this.id == "right-arrow") {
    changeSlide();
    intervalId = setInterval(changeSlide, time);
    if (counter == images.length) {
      counter = 0;
    }
  }
}
createDots();
dots.forEach((dot, index) => {
  dot.addEventListener("click", function (e) {
    counter = index;
    console.log(counter);
    changeSlide();
    clearInterval(intervalId);
    intervalId = setInterval(changeSlide, time);
  });
});
