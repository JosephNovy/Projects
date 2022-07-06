import { getElement } from "../utils.js";

const cartoverlay = getElement(".cart-overlay");
const closecartbtn = getElement(".cart-close");
const togglecartbtn = getElement(".toggle-cart");

togglecartbtn.addEventListener("click", () => {
  cartoverlay.classList.add("show");
});
closecartbtn.addEventListener("click", () => {
  cartoverlay.classList.remove("show");
});

export const openCart = () => {
  cartoverlay.classList.add("show");
};
