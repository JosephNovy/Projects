const colors = ["green", "red", "rgba(133,122,200)", " #f15025"];

const btn = document.getElementById("btn");
const color = document.getElementsByClassName("color");

btn.addEventListener("click", function () {
  const randomcolor = getramdomcolor();
  document.body.style.backgroundColor = colors[randomcolor];
  color.textContent = colors[randomcolor];
});

function getramdomcolor() {
  return Math.floor(Math.random() * colors.length);
}
