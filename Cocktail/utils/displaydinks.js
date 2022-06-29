import { getelement } from "./getelement.js";
import { hideloading } from "./toggleloading.js";
export const displaydrinks = ({ drinks }) => {
  const section = getelement(".section-center");
  const title = getelement(".title");
  if (!drinks) {
    hideloading();
    title.textContent = "Sorry, no drinks matched your search";
    section.innerHTML = null;
    return;
  }
  const newdrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
    })
    .join("");
  hideloading();
  title.textContent = "";
  section.innerHTML = newdrinks;
  return section;
};
