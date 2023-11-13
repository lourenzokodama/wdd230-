let currentDate = document.lastModified;
document.querySelector('#lastModified').textContent = currentDate;

// Copyright Date
let date = new Date();
let year = date.getFullYear();
document.querySelector('#copyrightYear').innerHTML = year;

// Today's Date
const dateField = document.querySelector(".date");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
dateField.innerHTML = fullDate;

// Hamburger Menu

let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');

});

let day = date.getDay();

if (day == 1 || day == 2) {
    let banner = document.querySelector('.banner');
    banner.style.display = 'block';

    document.querySelector(".banner-button").addEventListener("click", function () {
        banner.style.display = 'none';
      });
} else {
    let banner = document.querySelector('.banner');
    banner.style.display = 'none';
}

const images = document.querySelectorAll('img');
const options = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };

const preloadImage = (img) => {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
}

const io = new IntersectionObserver((entries, io) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            io.unobserve(entry.target);
        }
    });
}, options);

images.forEach(image => {
    io.observe(image);
});
// change color
const btn = document.getElementById("btn");

let randomNum = () => {
    return Math.floor(Math.random() * 256);
};
let changeColor = () => {
    let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
    document.body.style.backgroundColor = randomColor;
};

btn.addEventListener("click", changeColor);
window.addEventListener("load", changeColor);

// this is diretoryfile

const gridbutton = document.querySelector("#grid01");
const listbutton = document.querySelector("#toggleView");
const display = document.querySelector("article");



gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid01");
	display.classList.remove("toggleView");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("toggleView");
	display.classList.remove("grid01");
}


