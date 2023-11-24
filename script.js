// let prev = document.querySelector('.btn-prev');
// let next = document.querySelector('.btn-next');
// let img = document.querySelectorAll('.slider_img img');
// let i = 0;

// next.addEventListener('click', function (){
//     img[i].style.display = 'none';
//     i++;
//     img[i].style.display = 'block';
//     console.log(i);
//     if (i > img.length) {
//         img[i] = 0;
//     }
// });
// setInterval(function () {
//     img[i].style.display = 'none';
//     i++;
//     if (i >= img.length) {
//         i = 0;
//     }
//     img[i].style.display = 'block';
//     console.log(i);
// }, 2000);
// next.addEventListener('click', function (){
//     img[i].classList.remove('active');
//     i++;
//     if (i >= img.length) {
//         i = 0;
//     }
//     img[i].classList.add('active');
//     console.log(i);
// });
// CSS class name for dark theme
const darkTheme = "dark-theme";

const darkThemeSetUp = () => {
  if (getCurrentTheme() === "dark") {
    document.getElementById("toggleBtn").checked = true;
    document.getElementById("mode-text").textContent = "Dark Mode";
  } else {
    document.getElementById("toggleBtn").checked = false;
    document.getElementById("mode-text").textContent = "Light Mode";
  }
};

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

//   Get user's theme preference from local storage
const selectedTheme = localStorage.getItem("selected-theme");
if (selectedTheme === "dark") {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  darkThemeSetUp();
}

const themeButton = document.getElementById("toggleBtn");
themeButton.addEventListener("change", () => {
  document.body.classList.toggle(darkTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  darkThemeSetUp();
});
