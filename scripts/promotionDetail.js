import { promotions } from './objectForCinema.js';

function getParamByName(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

window.onload = function () {
  const id = getParamByName("id");
  const promo = promotions.find(p => p.id === id);
  console.log(promo);

  if (promo) {
    document.getElementById("promo-image").src = promo.image;
    document.getElementById("promo-title").innerText = promo.title;
    document.getElementById("promo-subtitle").innerText = promo.description;
    document.getElementById("promo-content").innerHTML = promo.content;
  } else {
    document.querySelector(".promo-container").innerHTML = `<h2>Không tìm thấy khuyến mãi!</h2>`;
  }
};

