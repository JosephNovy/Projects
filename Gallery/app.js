function getelement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selection, no such element exists`
  );
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];
  // target
  this.modal = getelement(".modal");
  this.modalimg = getelement(".main-img");
  this.imagename = getelement(".image-name");
  this.modalimages = getelement(".modal-images");
  this.closebtn = getelement(".close-btn");
  this.prevbtn = getelement(".prev-btn");
  this.nextbtn = getelement(".next-btn");

  this.closemodal = this.closemodal.bind(this);
  this.nextimage = this.nextimage.bind(this);
  this.previmage = this.previmage.bind(this);
  this.chooseimage = this.chooseimage.bind(this);
  // bind function
  // container event
  this.container.addEventListener(
    "click",
    function (event) {
      if (event.target.classList.contains("img")) {
        this.openmodal(event.target, this.list);
      }
      this.openmodal();
    }.bind(this)
  );
}

Gallery.prototype.setmainimage = function (selectedimage) {
  this.modalimg.src = selectedimage.src;
  this.imagename.textContent = selectedimage.title;
};

Gallery.prototype.openmodal = function (selectedimage, list) {
  this.setmainimage(selectedimage);
  this.modalimages.innerHTML = list
    .map(function (image) {
      return ` <img src="${
        image.src
      }" title = "${image.title}" data-id = "${image.dataset.id}" class = "${selectedimage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`;
    })
    .join("");
  this.modal.classList.add("open");
  this.closebtn.addEventListener("click", this.closemodal);
  this.nextbtn.addEventListener("click", this.nextimage);
  this.prevbtn.addEventListener("click", this.previmage);
  this.modalimages.addEventListener("click", this.chooseimage);
};

Gallery.prototype.closemodal = function () {
  this.modal.classList.remove("open");
  this.closebtn.removeEventListener("click", this.closemodal);
  this.nextbtn.removeEventListener("click", this.nextimage);
  this.prevbtn.removeEventListener("click", this.previmage);
  this.modalimages.removeEventListener("click", this.chooseimage);
};
Gallery.prototype.nextimage = function () {
  const selected = this.modalimages.querySelector(".selected");
  const next =
    selected.nextElementSibling || this.modalimages.firstElementChild;
  selected.classList.remove("selected");
  next.classList.add("selected");
  this.setmainimage(next);
};
Gallery.prototype.previmage = function () {
  const selected = this.modalimages.querySelector(".selected");
  const prev =
    selected.previousElementSibling || this.modalimages.lastElementChild;
  selected.classList.remove("selected");
  prev.classList.add("selected");
  this.setmainimage(prev);
};
Gallery.prototype.chooseimage = function (event) {
  if (event.target.classList.contains("modal-img")) {
    const selected = this.modalimages.querySelector(".selected");
    selected.classList.remove("selected");
    this.setmainimage(event.target);
    event.target.classList.add("selected");
  }
};
const nature = new Gallery(getelement(".nature"));
const city = new Gallery(getelement(".city"));
