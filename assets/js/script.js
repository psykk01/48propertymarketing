'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * add event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
});

/*
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
 
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 0}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}






const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
  (slide, index) =>{
    slide.style.left = `${index + 100}%`
  }
)

const goPrev = () =>{
  counter--
  
  slideImage()
}

const goNext = () =>{
  counter++
  
  slideImage()
}

const slideImage = () =>{
  slides.forEach(
    (slide) => {
    slide.style.transform = `translateX(-${counter + 100}%)`
  }
  )
}*/

/*
let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slider img');
  
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex - 1].style.display = 'block';
}
*/

let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.slider img');
  
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex - 1].style.display = 'block';
}

//second slide
let slideIndex1 = 1;
showSlide1(slideIndex1);

function changeSlide1(n) {
  showSlide1(slideIndex1 += n);
}

function showSlide1(n) {
  const slides1 = document.querySelectorAll('.slider1 img');
  
  if (n > slides1.length) {
    slideIndex1 = 1;
  } else if (n < 1) {
    slideIndex1 = slides1.length;
  }
  
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = 'none';
  }
  
  slides1[slideIndex1 - 1].style.display = 'block';
}
//slideshow 3
let slideIndex2 = 1;
showSlide2(slideIndex2);

function changeSlide2(n) {
  showSlide2(slideIndex2 += n);
}

function showSlide2(n) {
  const slides2 = document.querySelectorAll('.slider2 img');
  
  if (n > slides2.length) {
    slideIndex2 = 1;
  } else if (n < 1) {
    slideIndex2 = slides2.length;
  }
  
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = 'none';
  }
  
  slides2[slideIndex2 - 1].style.display = 'block';
}
//slideshow 4
let slideIndex3 = 1;
showSlide3(slideIndex3);

function changeSlide3(n) {
  showSlide3(slideIndex3 += n);
}

function showSlide3(n) {
  const slides3 = document.querySelectorAll('.slider3 img');
  
  if (n > slides3.length) {
    slideIndex3 = 1;
  } else if (n < 1) {
    slideIndex3 = slides3.length;
  }
  
  for (let i = 0; i < slides3.length; i++) {
    slides3[i].style.display = 'none';
  }
  
  slides3[slideIndex3 - 1].style.display = 'block';
}

//slideshow 5
let slideIndex4 = 1;
showSlide4(slideIndex4);

function changeSlide4(n) {
  showSlide4(slideIndex4 += n);
}

function showSlide4(n) {
  const slides4 = document.querySelectorAll('.slider4 img');
  
  if (n > slides4.length) {
    slideIndex4 = 1;
  } else if (n < 1) {
    slideIndex4 = slides4.length;
  }
  
  for (let i = 0; i < slides4.length; i++) {
    slides4[i].style.display = 'none';
  }
  
  slides4[slideIndex4 - 1].style.display = 'block';
}

/*
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function openFullscreen(mySlides) {
  if (mySlides.requestFullscreen) {
    mySlides.requestFullscreen();
  } else if (mySlides.mozRequestFullScreen) {
    mySlides.mozRequestFullScreen();
  } else if (mySlides.webkitRequestFullscreen) {
    mySlides.webkitRequestFullscreen();
  } else if (mySlides.msRequestFullscreen) {
    mySlides.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

function navigateSlides(direction) {
  if (direction === 'next') {
    currentSlide++;
    if (currentSlide === slides.length) {
      currentSlide = 0; // Wrap around to the first slide
    }
  } else if (direction === 'previous') {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = slides.length - 1; // Wrap around to the last slide
    }
  }
  const currentImage = slides[currentSlide].querySelector('img');
  openFullscreen(currentImage);
}

const previousArrow = document.querySelector('.arrow.previous');
const nextArrow = document.querySelector('.arrow.next');

previousArrow.addEventListener('click', function() {
  exitFullscreen();
  navigateSlides('previous');
});

nextArrow.addEventListener('click', function() {
  exitFullscreen();
  navigateSlides('next');
});
 */


$(document).ready(function() {
  $(".fancybox").fancybox();
});

$(document).ready(function() {
  $(".fancybox2").fancybox();
});

