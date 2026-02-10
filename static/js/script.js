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
const photos = [
  {
    src: "/static/img/foto1.jpg",
    location: "📍 San Miguel de Allende",
    comment: "Golden hour que no se repite."
  },
  {
    src: "/static/img/foto2.jpg",
    location: "📍 Guanajuato, México",
    comment: "Calles que cuentan historias."
  },
  {
    src: "/static/img/foto3.jpg",
    location: "📍 León, Gto",
    comment: "Luces, sombras y paciencia."
  },
  {
    src: "/static/img/foto4.jpg",
    location: "📍 CDMX",
    comment: "El caos también tiene estética."
  }
];

function changePhoto(index) {
  document.getElementById("mainImage").src = photos[index].src;
  document.getElementById("location").innerText = photos[index].location;
  document.getElementById("comment").innerText = `"${photos[index].comment}"`;

  document.querySelectorAll('.thumbnails img')
    .forEach(img => img.classList.remove('active-thumb'));

  document.querySelectorAll('.thumbnails img')[index]
    .classList.add('active-thumb');
}