// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";
// set items

const cartitemcountDOM = getElement(".cart-item-count");
const cartitemDOM = getElement(".cart-items");
const carttotalDOM = getElement(".cart-total");

let cart = getStorageItem("carts");

export const addToCart = (id) => {
  let item = cart.find((cartitem) => cartitem.id === id);
  if (!item) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addToCartDOM(product);
  } else {
    const amount = increaseAmount(id);
    const items = [...cartitemDOM.querySelectorAll(".cart-item-amount")];
    const newamount = items.find((value) => value.dataset.id === id);
    newamount.textContent = amount;
  }
  displayCartItemCount();
  displayCartTotal();
  setStorageItem("carts", cart);
  openCart();
};
function displayCartItemCount() {
  const amount = cart.reduce((total, cartitem) => {
    return (total += cartitem.amount);
  }, 0);
  cartitemcountDOM.textContent = amount;
}
function displayCartTotal() {
  let total = cart.reduce((total, cartitem) => {
    return (total += cartitem.price * cartitem.amount);
  }, 0);
  carttotalDOM.textContent = `Total: ${formatPrice(total)}`;
}

function displayCartItemsDOM() {
  cart.forEach((cartitem) => {
    addToCartDOM(cartitem);
  });
}
function removeItem(id) {
  cart = cart.filter((cartitem) => cartitem.id !== id);
}
function increaseAmount(id) {
  let newamount;
  cart = cart.map((cartitem) => {
    if (cartitem.id === id) {
      newamount = cartitem.amount + 1;
      cartitem = { ...cartitem, amount: newamount };
    }
    return cartitem;
  });
  return newamount;
}
function decreaseAmount(id) {
  let newamount;
  cart = cart.map((cartitem) => {
    if (cartitem.id === id) {
      newamount = cartitem.amount - 1;
      cartitem = { ...cartitem, amount: newamount };
    }
    return cartitem;
  });
  return newamount;
}

function setupCartFunctionality() {
  cartitemDOM.addEventListener("click", (event) => {
    const element = event.target;
    const parent = event.target.parentElement;
    const id = event.target.dataset.id;
    const parentID = event.target.parentElement.dataset.id;

    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(id);
      parent.parentElement.remove();
    }
    if (parent.classList.contains("cart-item-increase-btn")) {
      const newamount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newamount;
    }
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const newamount = decreaseAmount(parentID);
      if (newamount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newamount;
      }
    }
    displayCartItemCount();
    displayCartTotal();
    setStorageItem("carts", cart);
  });
}

const init = () => {
  displayCartItemCount();
  displayCartTotal();
  displayCartItemsDOM();
  setupCartFunctionality();
};
init();
