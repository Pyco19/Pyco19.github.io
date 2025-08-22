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


function openPopup(imgSrc) {
  document.getElementById('popupContent').innerHTML = `
    <img src="${imgSrc}" alt="" style="width:100%; height:auto; border-radius:8px;">
  `;
  document.getElementById('overlay').style.display = 'flex';
}

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}

window.addEventListener("load", () => {
  const items = document.querySelectorAll("#isiprofile > *:not(#navbar)");
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.4}s`; // delay 0.4s per item
  });
});