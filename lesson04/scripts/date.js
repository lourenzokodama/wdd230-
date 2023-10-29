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


  // function to check whether a given year is a leap year
        function isLeapYear(year) {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        }

        // function to calculate the number of days between two dates
        function getDaysDifference(date1, date2) {
            const timeDiff = Math.abs(date2 - date1);
            const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

            return dayDiff;
        }

        // function to format the message about the time between page visits
        function formatMessage(daysDifference) {
            let message;

            if (daysDifference === 0) {
                message = "Back so soon! Awesome!";
            } else if (daysDifference === 1) {
                message = "You last visited 1 day ago.";
            } else {
                message = `You last visited ${daysDifference} days ago.`;
            }

            return message;
        }

        // function to load the image with lazy loading
        function loadImage(imgElement) {
            imgElement.src = imgElement.dataset.src;
        }

        // function to check if the user has visited the page before
        function isFirstVisit() {
            return localStorage.getItem("lastVisit") === null;
        }

        // function to calculate the time between page visits and display the message
        function checkTimeSinceLastVisit() {
            const currentDate = new Date();
            const lastVisit = localStorage.getItem("lastVisit")
                ? new Date(localStorage.getItem("lastVisit"))
                : null;

            if (isFirstVisit()) {
                document.getElementById("sidebar-content").innerHTML = "Welcome! Let us know if you have any questions.";
            } else {
                const daysDifference = getDaysDifference(lastVisit, currentDate);
                const message = formatMessage(daysDifference);
                document.getElementById("sidebar-content").innerHTML = message;
            }

            localStorage.setItem("lastVisit", currentDate);
        }

        // function to add the onscroll event to the window
        function addOnScrollEvent() {
            window.onscroll = function () {
                const imgElements = document.getElementsByClassName("lazy-load");
                for (let i = 0; i < imgElements.length; i++) {
                    if (imgElements[i].getBoundingClientRect().top <= window.innerHeight && imgElements[i].dataset.src) {
                        loadImage(imgElements[i]);
                    }
                }
            };
        }

        // function to call the other functions when the page loads
        function init() {
            checkTimeSinceLastVisit();
            addOnScrollEvent();
        }

        document.addEventListener("DOMContentLoaded", init);
