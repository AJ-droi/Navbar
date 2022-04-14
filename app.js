const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const nav = document.querySelector(".nav-header");

window.addEventListener("DOMContentLoaded", function (){
    links.style.display="none";
})

btn.addEventListener("click", function () {
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});
