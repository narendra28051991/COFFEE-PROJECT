// Slider function

let index = 1;

function slider (number) {
  let slides = document.getElementsByClassName("image-slide");
  if (number > slides.length) {
    index = 1;
  }
  if (number < 1) {
    index = slides.length;
  }
  for (let x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}

function setSlides(number) {
  slider((index += number));
}

slider(index);

const leftArrow = document.querySelector(".slider-btn.previous");
leftArrow.addEventListener("click", () => {
  setSlides(-1);
});

const rightArrow = document.querySelector(".slider-btn.next");
rightArrow.addEventListener("click", () => {
  setSlides(1);
});
