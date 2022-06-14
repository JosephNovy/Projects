const menu = [
  {
    id: 1,
    title: "Pancake",
    category: "breakfast",
    price: "23,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/menu-modal/images/pancake/pexels-pixabay-407041.png",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 2,
    title: "Milkshaje de Morango",
    category: "shakes",
    price: "14,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/menu-modal/images/milkshakes/milkshake1/pexels-alexander-mils-2045362.jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 3,
    title: "Milkshaje de Chocolate",
    category: "shakes",
    price: "17,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/menu-modal/images/milkshakes/milkshake2/pexels-horizon-content-3727250.jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 4,
    title: "Cafe da Manha Americano",
    category: "breakfast",
    price: "35,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/menu-modal/images/breackfast/pexels-valeria-boltneva-1833336.jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 5,
    title: "Frango",
    category: "lunch",
    price: "45,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/menu-modal/images/Chicken portion/pexels-chan-walrus-958545.jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 6,
    title: "Peixe",
    category: "lunch",
    price: "55,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/menu-modal/images/fish/prato1/pexels-deeana-arts-2825226.jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 7,
    title: "Peixe com Vegetais",
    category: "lunch",
    price: "40,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/menu-modal/images/fish/prato 2/pexels-kei-photo-2741458.jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },

  {
    id: 8,
    title: "Pasta com Tomate",
    category: "lunch",
    price: "36,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/menu-modal/images/pasta/pasta1/pexels-lisa-fotios-1279330.jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 9,
    title: "Pasta com Pesto",
    category: "lunch",
    price: "38,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/menu-modal/images/pasta/pasta 2/pexels-lgh-1256875.jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
  {
    id: 10,
    title: "Salada",
    category: "lunch",
    price: "30,00",
    img: "C:/Users/User/Documents/Estudos/Curso-Javascript/Projects/menu-modal/images/salada/pexels-iina-luoto-1211887.jpg",
    descrition:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum, magni totam accusantium harum exercitationem voluptatibus quidem fugiat consectetur laboriosam quo aut quod.",
  },
];

const sectioncenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displaymenu = menu.map(function (item) {
    return `<article class="menu-item">
          <div>
            <img src="${item.img}"  class="photo" alt="menu item"  />
          </div>
          <div class="item-info">
            <header class = "title">
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <div class="modal-overlay">
              <div class="modal-container">
                <p class="item-text">
                  ${item.descrition}
                </p>
                <button class="close-btn"><i class="fas fa-times"></i></button>
              </div>
            </div>
          </div>
        </article>`;
  });
  displaymenu = displaymenu.join("");
  sectioncenter.innerHTML = displaymenu;
  const menuitems = document.querySelectorAll(".menu-item");
  const modaloverlay = document.querySelector(".modal-overlay");
  const closebtn = document.querySelector(".close-btn");

  menuitems.forEach(function (menuitem) {
    const photomodal = menuitem.querySelector(".photo");
    photomodal.addEventListener("click", function () {
      modaloverlay.classList.add("open-modal");
    });
  });
  closebtn.addEventListener("click", function () {
    modaloverlay.classList.remove("open-modal");
  });
});
