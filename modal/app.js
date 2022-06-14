const modalbtn = document.querySelector(".modal-btn");
const modaloverlay = document.querySelector(".modal-overlay");
const closebtn = document.querySelector(".close-btn");

modalbtn.addEventListener("click", function () {
  modaloverlay.classList.add("open-modal");
});
closebtn.addEventListener("click", function () {
  modaloverlay.classList.remove("open-modal");
});
