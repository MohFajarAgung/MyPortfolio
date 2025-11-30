document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".portfolio-item");

  items.forEach((item, index) => {
    const position = index % 3; // untuk layout 3 kolom

    if (position === 0) {
      item.setAttribute("data-aos", "zoom-in-right"); // kiri
    } else if (position === 1) {
      item.setAttribute("data-aos", "zoom-in-up"); // tengah
    } else {
      item.setAttribute("data-aos", "zoom-in-left"); // kanan
    }

    // optional: delay biar smooth
    item.setAttribute("data-aos-delay", (index % 3) * 120);
    item.setAttribute("data-aos-duration", 500);
  });

  AOS.refresh();
});