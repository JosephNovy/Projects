const sideToggle = document.querySelector(".sidebar-toggle");
const closebtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

sideToggle.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
});
closebtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
