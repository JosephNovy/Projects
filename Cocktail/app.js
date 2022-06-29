import { showdrinks } from "./utils/presentdrinks.js";
import "./utils/searchform.js";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
  showdrinks(url);
});
