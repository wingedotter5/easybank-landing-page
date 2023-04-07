const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  const r = navLinks.getAttribute("data-toggled");
  if (r === "nope") {
    navLinks.setAttribute("data-toggled", "yep");
    hamburger.setAttribute("src", "./images/icon-close.svg");
  } else if (r === "yep") {
    navLinks.setAttribute("data-toggled", "nope");
    hamburger.setAttribute("src", "./images/icon-hamburger.svg");
  }
});
