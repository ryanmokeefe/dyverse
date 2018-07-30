let index = 0;
const slides = Array.from(document.getElementsByClassName("mySlides"));
const next = document.getElementById("next");
const prev = document.getElementById("prev");

slides[index].style.display = "block";

function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slides.forEach(slide => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

function prevSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slides.forEach(slide => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

let slideshow;
const start = () => {
  slideshow = setInterval(() => {
    nextSlide();
  }, 8000);
};

function stop() {
  clearInterval(slideshow);
}

next.onclick = () => {
  stop();
  nextSlide();
  start();
};

prev.onclick = () => {
  stop();
  prevSlide();
  start();
};

slideshow();
