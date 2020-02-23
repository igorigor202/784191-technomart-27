var dots = document.getElementsByClassName('dots-item'),
  dotsArea = document.getElementsByClassName('dots-block')[0],
  slides = document.getElementsByClassName('slides-item'),
  prevBtn = document.getElementById('left-button'),
  nextBtn = document.getElementById('right-button'),
  slideIndex = 0;

showSlides(slideIndex);

function showSlides (slideIndex) {
  if (slideIndex < 0) {
    slideIndex = 0;
  } else if (slideIndex > slides.length) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length ; i++) {
    slides[i].style.display = 'none';
  }

  for (let i=0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
}

function plusSlides (n) {
  showSlides(slideIndex + n);
}

function currentSlide (slideIndex) {
  showSlides(slideIndex);
}

prevBtn.onclick = function () {
  plusSlides( - 1);
}

nextBtn.onclick = function () {
  plusSlides(1);
}

dotsArea.onclick = function (e) {
  for (let i = 0; i < dots.length; i++) {
    if (e.target.classList.contains('dots-item') && e.target == dots[i]) {
      currentSlide(i);
    }
  }
}
