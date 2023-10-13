const button = document.querySelector("#menu");
const nav = document.querySelector("nav");

button.addEventListener("click", () => {
  nav.classList.toggle("open");
  button.classList.toggle("open");

const visitsDisplay = document.querySelector("#people");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit.  Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
});
