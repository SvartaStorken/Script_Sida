//message to console log
console.log("JavaScript is up and running");

//Get element id of one page with id="creator"
//document.getElementById("creator").innerText = "Martin";

document.querySelectorAll(".creator, #creator").forEach(el => {
    el.textContent = "Martin";
})