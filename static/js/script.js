// vars
const CFirstname = "Martin";
const CLastname = "Wallin";

// message to console log
console.log("JavaScript is up and running");

//Select all #ID and .class for loop elemnt text varibels first and last name.
document.querySelectorAll(".creator, #creator").forEach(el => {
    el.textContent = `${CFirstname} ${CLastname}`;
})
// add text to "id="creator
document.getElementById("creator").textContent = `This page was created by ${CFirstname} ${CLastname}`
