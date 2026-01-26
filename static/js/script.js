function showSection(section) {
  document.getElementById('dev-section').classList.remove('active');
  document.getElementById('photo-section').classList.remove('active');

  if (section === 'dev') {
    document.getElementById('dev-section').classList.add('active');
  } else {
    document.getElementById('photo-section').classList.add('active');
  }
}

let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}
