import { getElement } from "./utils.js";

const togglenav = getElement(".toggle-nav");
const sidebaroverlay = getElement(".sidebar-overlay");
const closebtn = getElement(".sidebar-close");

togglenav.addEventListener("click", () => {
  sidebaroverlay.classList.add("show");
});
closebtn.addEventListener("click", () => {
  sidebaroverlay.classList.remove("show");
});
