import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  //set companies menu----------------------------
  let companies = ["all", ...new Set(store.map((product) => product.company))];
  const companiesDOM = getElement(".companies");
  companiesDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");
  //Filter companies --------------------------------
  companiesDOM.addEventListener("click", (event) => {
    const element = event.target;
    if (element.classList.contains("company-btn")) {
      let newstore = [];
      if (element.textContent === "all") {
        newstore = [...store];
      } else {
        newstore = store.filter(
          (product) => product.company === event.target.textContent
        );
      }
      display(newstore, getElement(".products-container"), true);
    }
  });
};

export default setupCompanies;
