let menuToggle = document.querySelector(".menu-toggle");
let menuIcon = document.querySelector(".menu-toggle i");
let aside = document.querySelector("aside");

menuToggle.addEventListener("click", () => {
  aside.classList.toggle("active");
  menuIcon.classList.toggle("fa-times");
});

document.addEventListener("click", (e) => {
  if (e.target !== aside && e.target !== menuToggle && e.target !== menuIcon) {
    aside.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});

// create modal
let orignalImg = document.querySelectorAll(".portfolio-item img");
let modalContent = document.querySelector(".modal-content");
let myImg = document.querySelector(".modal-img");
let closeBtn = document.querySelector(".close");
let overlay = document.querySelector(".portfolio .overlay");

orignalImg.forEach((el) => {
  el.addEventListener("click", () => {
    modalContent.style.transform = "scale(1)";
    overlay.setAttribute("style", "opacity: 1; pointer-events: all;");
    myImg.src = el.src;
    document.querySelector(".caption").innerHTML = el.alt;
  });
});

closeBtn.addEventListener("click", () => {
  modalContent.style.transform = "scale(0)";
  overlay.setAttribute("style", "opacity: 0; pointer-events: none;");
});

document.onkeydown = function (e) {
  if ((e.key = "27")) {
    modalContent.style.transform = "scale(0)";
  }
};
