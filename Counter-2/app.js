function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetbtn = element.querySelector(".reset");
  this.increasebtn = element.querySelector(".increase");
  this.decreasebtn = element.querySelector(".decrease");
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  this.increasebtn.addEventListener("click", this.increase);
  this.decreasebtn.addEventListener("click", this.decrease);
  this.resetbtn.addEventListener("click", this.reset);
}

Counter.prototype.increase = function () {
  this.value += 1;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value -= 1;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstcounter = new Counter(getelement(".first-counter"), 100);
const secondcounter = new Counter(getelement(".second-counter"), 150);

function getelement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection} selector, no such element exists.`
  );
}
