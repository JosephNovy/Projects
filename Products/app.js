const url = "https://course-api.com/javascript-store-products";
const productsdom = document.querySelector(".products-center");

const fetchproducts = async () => {
  productsdom.innerHTML = '<div class="loading"></div>';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsdom.innerHTML = '<p class="error">there was an error</p>';
  }
};

const displayproducts = (list) => {
  const productlist = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatprice = price / 100;
      return `<a href="product.html?id=${id}" class="single-product">
            <img
              src="${img}"
              class="single-product-img img"
              alt="${title}"
            />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatprice}</span>
            </footer>
          </a>`;
    })
    .join("");
  productsdom.innerHTML = `<div class="products-container">
          ${productlist}
          
        </div>`;
};
const start = async () => {
  const data = await fetchproducts();
  displayproducts(data);
};
start();
