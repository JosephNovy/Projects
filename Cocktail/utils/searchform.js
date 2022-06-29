import { getelement } from "./getelement.js";
import { showdrinks } from "./presentdrinks.js";

const baseurl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = getelement(".search-form");
const input = getelement('[name="drink"]');

form.addEventListener("keyup", function (event) {
  event.preventDefault();
  const value = input.value;
  if (!value) return;
  showdrinks(`${baseurl}${value}`);
});
