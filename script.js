let slideIndex = 0;
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");
const slidesBox = document.querySelector(".slides");

function updateSlide(i) {
  if (i < 0) i = slides.length - 1;
  if (i >= slides.length) i = 0;
  slideIndex = i;
  slidesBox.style.transform = `translateX(-${slideIndex * 100}%)`;
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[slideIndex].classList.add("active");
}

setInterval(() => {
  updateSlide(slideIndex + 1);
}, 4000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => updateSlide(index));
});
