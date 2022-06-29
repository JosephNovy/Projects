import { hideloading } from "./toggleloading.js";
import { getelement } from "./getelement.js";

export const displaydrink = (data) => {
  hideloading();
  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
  ];
  const img = getelement(".drink-img");
  const drinkname = getelement(".drink-info");
  const description = getelement(".drink-desc");
  const ingredients = getelement(".drink-ingredients");
  img.src = image;
  document.title = name;
  drinkname.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</i>`;
    })
    .join("");
};
