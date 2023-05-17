const images = ["Palmerston.png", "Gladstone.png", "Ossie.png", "Evie.png", "Larry.png"];

let imgtime = 0;
setInterval(() => {
  document.querySelector("#member-img").src = "./img/" + images[imgtime];
  imgtime++;
  if (imgtime === images.length) imgtime = 0;
}, 1500)