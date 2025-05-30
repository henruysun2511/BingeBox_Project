import { promotions } from './objectForCinema.js';

const container = document.getElementById("promotion-list");

promotions.forEach(promo => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <a href="" target="_blank" style="text-decoration: none; color: inherit;">
      <div class="card h-100">
        <img src="${promo.image}" class="card-img-top" alt="${promo.title}">
        <div class="card-body">
          <h5 class="card-title">${promo.title}</h5>
          <p class="card-text">${promo.description}</p>
        </div>
      </div>
    </a>
 `;
  col.addEventListener('click', function () {
    window.location.href = `./promotionDetail.html?id=${promo.id}`;
  });
  container.appendChild(col);
});