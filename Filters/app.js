let filteredproducts = [...products];

const productscontainer = document.querySelector(".products-container");

const displayproducts = () => {
  if (filteredproducts.length < 1) {
    productscontainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
    return;
  }
  productscontainer.innerHTML = filteredproducts
    .map((product) => {
      const { id, title, image, price } = product;
      return `<article class="product" data-id = "${id}">
          <img
            src="${image}"
            class="product-img img"
            alt=""
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    })
    .join("");
};
displayproducts();

const form = document.querySelector(".input-form");
const searchinput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputvalue = searchinput.value;
  filteredproducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputvalue);
  });
  displayproducts();
});

const companiesdom = document.querySelector(".companies");

const displaybuttons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  companiesdom.innerHTML = buttons
    .map((company) => {
      return `<button class="company-btn" data-id="${company}">${company}</button>`;
    })
    .join("");
};
displaybuttons();

companiesdom.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("company-btn")) {
    if (element.dataset.id === "all") {
      filteredproducts = [...products];
    } else {
      filteredproducts = products.filter((product) => {
        return product.company === element.dataset.id;
      });
    }
    searchinput.value = "";
    displayproducts();
  }
});
