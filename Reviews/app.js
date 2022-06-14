const reviews = [
  {
    id: 1,
    name: "sarah smith",
    emprego: "designer",
    img: "C:\\Users\\User\\Documents\\Estudos\\Curso-Javascript\\Projects\\Reviews\\sarah.jpg",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores consectetur possimus soluta, rerum quibusdam, quidem eveniet nostrum distinctio pariatur praesentium cum, corrupti architecto maiores magnam nulla natus at sit.",
  },
  {
    id: 2,
    name: "joao roberto",
    emprego: "Engenheiro",
    img: "C:\\Users\\User\\Documents\\Estudos\\Curso-Javascript\\Projects\\Reviews\\joao.jpg",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores consectetur possimus soluta, rerum quibusdam, quidem eveniet nostrum distinctio pariatur praesentium cum, corrupti architecto maiores magnam nulla natus at sit.",
  },
  {
    id: 3,
    name: "robert silva",
    emprego: "Pintor",
    img: "C:\\Users\\User\\Documents\\Estudos\\Curso-Javascript\\Projects\\Reviews\\robert.jpg",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum asperiores consectetur possimus soluta, rerum quibusdam, quidem eveniet nostrum distinctio pariatur praesentium cum, corrupti architecto maiores magnam nulla natus at sit.",
  },
];
const img = document.querySelector("#pessoa-img");
const name = document.querySelector("#name");
const cargo = document.querySelector("#cargo");
const texto = document.querySelector("#text");
const btns = document.querySelectorAll(".btn");
/*const btnnext = document.querySelector(".btn-next");
const btnprev = document.querySelector(".btn-prev");
const btnsurp = document.querySelector(".btn-surprise");*/

//item inicial
let currentitem = 0;

window.addEventListener("DOMContentLoaded", function () {
  pessoas(currentitem);
});

function pessoas(pessoa) {
  const item = reviews[pessoa];
  img.src = item.img;
  name.textContent = item.name;
  cargo.textContent = item.emprego;
  texto.textContent = item.Text;
}
/*btnnext.addEventListener("click", function () {
  currentitem += 1;
  if (currentitem > reviews.length - 1) {
    currentitem = 0;
  }
  pessoas(currentitem);
});
btnprev.addEventListener("click", function () {
  currentitem -= 1;
  if (currentitem < 0) {
    currentitem = reviews.length - 1;
  }
  pessoas(currentitem);
});*/
btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const profile = event.currentTarget.classList;
    if (profile.contains("next")) {
      currentitem += 1;
    } else if (profile.contains("prev")) {
      currentitem -= 1;
    } else if (profile.contains("surprise")) {
      currentitem = Math.floor(Math.random() * reviews.length);
    }
    if (currentitem > reviews.length - 1) {
      currentitem = 0;
    } else if (currentitem < 0) {
      currentitem = 2;
    }
    pessoas(currentitem);
  });
});
