import { getElement } from "../utils.js";
import display from "../displayProducts.js";
const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameinput = getElement(".search-input");
  form.addEventListener("keyup", () => {
    const value = nameinput.value;
    if (value) {
      const newstore = store.filter((product) => {
        let { name } = product;
        name = name.toLowerCase();
        if (name.startsWith(value)) {
          return product;
        }
      });
      display(newstore, getElement(".products-container"), true);
      if (newstore.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class='filter-error'>Sorry, no products matched your search</h3>`;
      }
    } else {
      display(store, getElement(".products-container"), true);
    }
  });
};

export default setupSearch;
