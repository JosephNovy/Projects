import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceinput = getElement(".price-filter");
  const pricevalue = getElement(".price-value");

  //Price Filter------------------------------------------------
  let maxprice = store.map((product) => product.price);
  maxprice = Math.max(...maxprice);
  maxprice = Math.ceil(maxprice / 100);
  priceinput.value = maxprice;
  priceinput.max = maxprice;
  priceinput.min = 0;
  pricevalue.textContent = `Value: $${maxprice}`;
  priceinput.addEventListener("input", () => {
    const value = parseInt(priceinput.value);
    pricevalue.textContent = `Value: $${value}`;
    let newstore = store.filter((product) => product.price / 100 <= value);
    display(newstore, getElement(".products-container"), true);
    if (newstore.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class='filter-error'>Sorry, no products matched your search</h3>`;
    }
  });
};

export default setupPrice;
