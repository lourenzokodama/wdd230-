const gridbutton = document.querySelector("#grid");

gridbutton.addEventListener("click", () => {
   	display.classList.add("grid");
});

listbutton.addEventListener("click", showList); // example using defined function
function showList() {
    	display.classList.remove("grid");
    }
