document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("about-loader");
  const content = document.getElementById("about-content");
  const image = document.getElementById("about-image");

  function showAboutSection() {
    loader.style.display = "none";
    content.style.display = "block";
    AOS.refresh();
  }

  if (image.complete) {
    showAboutSection();  // gambar sudah cached
  } else {
    image.onload = showAboutSection;  // gambar baru selesai dimuat
  }
});
