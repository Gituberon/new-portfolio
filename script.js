const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
const nextSlide = document.querySelector(".btn-next");
let curSlide = 0;
let maxSlide = slides.length - 1;
nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
function toggle_light_mode() {
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
  } else {
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
  }
}
window.addEventListener(
  "storage",
  function () {
    if (localStorage.lightMode == "dark") {
      app.setAttribute("light-mode", "dark");
    } else {
      app.setAttribute("light-mode", "light");
    }
  },
  false
);
