let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.transform = "translateY(-100%)"; // إخفاء `navbar`
  } else {
    navbar.style.transform = "translateY(0)"; // إظهار `navbar`
  }
  lastScrollTop = scrollTop;
});
