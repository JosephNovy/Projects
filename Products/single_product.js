const productdom = document.querySelector(".product");
const url = "https://course-api.com/javascript-store-single-product";

const fetchproduct = async () => {
  try {
    productdom.innerHTML = `<h4 class='product-loading'>loading...</h4>`;
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    const response = await fetch(`${url}?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    productdom.innerHTML = `<p class='error'> There was a problem loading this product.</p>`;
  }
};

const displayproduct = (product) => {
  const {
    company,
    colors,
    description,
    name: title,
    price,
    image,
  } = product.fields;
  const { url: img } = image[0];
  document.title = title.toUpperCase();
  const colorslist = colors
    .map((color) => {
      return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join("");
  productdom.innerHTML = `<div class="product-wrapper">
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$${price / 100}</span>
          <div class="colors">
            ${colorslist}
          </div>
          <p>
            ${description}
          </p>
          <button class="btn">add to the cart</button>
        </div>
      </div>`;
};

const start = async () => {
  const data = await fetchproduct();
  displayproduct(data);
};
start();
