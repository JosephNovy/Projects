const displaybuttons = (container, pages, activeindex) => {
  let btns = pages.map((_, pageindex) => {
    return `<button class="page-btn ${
      activeindex === pageindex ? "active-btn" : "null"
    }" data-index="${pageindex}">${pageindex + 1}</button>`;
  });
  btns.push('<button class="next-btn">next</button>');
  btns.unshift('<button class="prev-btn">prev</button>');
  container.innerHTML = btns.join("");
};

export default displaybuttons;
