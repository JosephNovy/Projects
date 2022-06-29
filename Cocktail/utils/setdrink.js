export const setdrink = (section) => {
  section.addEventListener("click", function (event) {
    const id = event.target.parentElement.dataset.id;
    localStorage.setItem("drink", id);
  });
};
