  window.onload = function() {
      let counter = Number(window.localStorage.getItem("counter")) || 0;
      counter++;
      window.localStorage.setItem("counter", counter);
      document.getElementById("counterDisplay").textContent = counter;
    };
