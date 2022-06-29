import { fetchdrinks } from "./utils/fetchdrinks.js";
import { displaydrink } from "./utils/displaysingledrink.js";

const presentdrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    window.location.replace("index.html");
  } else {
    const drink = await fetchdrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    displaydrink(drink);
  }
};
window.addEventListener("DOMContentLoaded", presentdrink);
