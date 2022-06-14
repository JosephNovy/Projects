const menu = [
  {
    id: 1,
    title: "Pancake",
    category: "breakfast",
    price: "23,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/Menu/images/pancake/pexels-pixabay-407041.jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 2,
    title: "Milkshaje de Morango",
    category: "shakes",
    price: "14,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/Menu/images/milkshakes/milkshake1/pexels-alexander-mils-2045362jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 3,
    title: "Milkshaje de Chocolate",
    category: "shakes",
    price: "shakes",
    img: "",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 4,
    title: "Cafe da Manha Americano",
    category: "breakfast",
    price: "35,00",
    img: "",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 5,
    title: "Frango",
    category: "lunch",
    price: "45,00",
    img: "",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 6,
    title: "Peixe",
    category: "lunch",
    price: "55,00",
    img: "",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 7,
    title: "Peixe com Vegetais",
    category: "lunch",
    price: "40,00",
    img: "",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },

  {
    id: 8,
    title: "Pasta com Tomate",
    category: "lunch",
    price: "36,00",
    img: "",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 9,
    title: "Pasta com Pesto",
    category: "lunch",
    price: "38,00",
    img: "",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 10,
    title: "Salada",
    category: "lunch",
    price: "30,00",
    img: "",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
