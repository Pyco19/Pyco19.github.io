const navbarHorizontal = document.getElementById('navbar');
const navbarVertical = document.getElementById('navbar2');
const navbarVerticalk = document.getElementById('navbar3');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // scroll sedikit aja
        navbarHorizontal.classList.add('hide');
        navbarVertical.classList.add('show');
        navbarVerticalk.classList.add('show');
    } else {
        navbarHorizontal.classList.remove('hide');
        navbarVertical.classList.remove('show');
        navbarVerticalk.classList.remove('show');
    }
});

window.addEventListener("load", () => {
  const items = document.querySelectorAll("#content > *:not(#navbar)");
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 1}s`; // delay 0.4s per item
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const mataList = document.querySelectorAll(".mata");

  // gerak random tapi sinkron
  setInterval(() => {
    // buat 1 posisi random global
    const angle = Math.random() * Math.PI * 2;
    const radius = 10;

    mataList.forEach((mata) => {
      const pupil = mata.querySelector(".pupil");
      const rect = mata.getBoundingClientRect();

      const x = Math.cos(angle) * radius + rect.width / 2 - pupil.offsetWidth / 2;
      const y = Math.sin(angle) * radius + rect.height / 2 - pupil.offsetHeight / 2;

      pupil.style.left = `${x}px`;
      pupil.style.top = `${y}px`;
    });
  }, 1000); // ganti tiap 1 detik

  // animasi kedip otomatis
  setInterval(() => {
    mataList.forEach((mata) => {
      const kelopak = mata.querySelector(".kelopak");
      kelopak.classList.add("kedip");

      setTimeout(() => {
        kelopak.classList.remove("kedip");
      }, 200);
    });
  }, 4000); // kedip tiap 4 detik
});