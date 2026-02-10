let photos = [];
let currentIndex = 0;

fetch("/api/photos")
  .then(res => res.json())
  .then(data => {
    photos = data;
    renderGallery();
  })
  .catch(err => console.error("Error cargando fotos:", err));

function renderGallery() {
  const gallery = document.getElementById("photoGallery");
  gallery.innerHTML = "";

  photos.forEach((photo, i) => {
    const fig = document.createElement("figure");
    fig.className = "photo-item";
    fig.innerHTML = `
      <img src="${photo.src}" loading="lazy">
      <figcaption>${photo.caption || ""}</figcaption>
    `;
    fig.addEventListener("click", () => openViewer(i));
    gallery.appendChild(fig);
  });
}

function openViewer(i) {
  currentIndex = i;
  document.getElementById("viewerImage").src = photos[i].src;
  document.getElementById("viewerCaption").innerText = photos[i].caption || "";
  document.getElementById("photoViewer").classList.add("active");
}

function closeViewer() {
  document.getElementById("photoViewer").classList.remove("active");
}

function nextPhoto() {
  openViewer((currentIndex + 1) % photos.length);
}

function prevPhoto() {
  openViewer((currentIndex - 1 + photos.length) % photos.length);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeViewer();
});
