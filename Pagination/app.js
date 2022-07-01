import fetchfollowers from "./utils/fetchfollowers.js";
import displayfollowers from "./utils/displayfollowers.js";
import paginate from "./paginate.js";
import displaybuttons from "./utils/displaybuttons.js";

const title = document.querySelector(".section-title h1");
const btncontainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];

const setupui = () => {
  displayfollowers(pages[index]);
  displaybuttons(btncontainer, pages, index);
};

const init = async () => {
  const followers = await fetchfollowers();
  //displayfollowers(paginate(followers)[0]);
  title.textContent = "pagination";
  pages = paginate(followers);
  setupui();
};
window.addEventListener("load", init);
