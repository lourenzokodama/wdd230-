// Get the current year and update the element
const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();
document.getElementById("time").innerHTML = "Last updated:"+document.lastModified

// Get the last modified date and update the "lastModified" element
const dateElement = document.getElementById("lastModified");
const lastModifiedDate = document.lastModified;
dateElement.textContent = "LastModified: " + lastModifiedDate;

});
