const items = [...document.querySelectorAll(".number")];

const updatecount = (el) => {
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialvalue = 0;

  const increasecount = setInterval(() => {
    initialvalue += increment;
    if (initialvalue > value) {
      el.textContent = `${value}+`;
      clearInterval(increasecount);
      return;
    }
    el.textContent = `${initialvalue}+`;
  }, 100);
};

items.forEach((item) => {
  updatecount(item);
});
