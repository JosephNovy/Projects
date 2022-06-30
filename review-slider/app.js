import people from "./data.js";
const container = document.querySelector(".slide-container");
const nextbtn = document.querySelector(".next-btn");
const prevbtn = document.querySelector(".prev-btn");

//set slide

container.innerHTML = people
  .map((person, slideindex) => {
    const { img, name, job, text } = person;
    let position = "next";
    if (slideindex === 0) {
      position = "active";
    }
    if (slideindex === people.length - 1) {
      position = "last";
    }
    return `<article class="slide ${position}">
          <img
            src="${img}"
            alt="${name}"
            class="img"
          />
          <h4>${name}</h4>
          <p class="title">${job}r</p>
          <p class="text">
            ${text}
          </p>
          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>
        </article>`;
  })
  .join("");

const startslider = (type) => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove("active");
  last.classList.remove("last");
  next.classList.remove("next");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove("next");
    next.classList.add("last");
    return;
  }

  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextbtn.addEventListener("click", () => {
  startslider();
});

prevbtn.addEventListener("click", () => {
  startslider("prev");
});
