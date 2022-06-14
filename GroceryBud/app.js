//******Selecionar item
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitbtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearbtn = document.querySelector(".clear-btn");

//Editar
let editelement;
let editflag = false;
let editid = "";
//****Eventos
//submit form
form.addEventListener("submit", addItem);

//limpar itens
clearbtn.addEventListener("click", clearitems);
//load items
window.addEventListener("DOMContentLoaded", setupitems);

//*******funcoes
function addItem(event) {
  event.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value !== "" && editflag === false) {
    createlistitem(id, value);
    //display alert
    displayalert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // add to the local storage
    addtothelocalsotrage(id, value);
    // set back to the default
    setbacktothedefault();
  } else if (value !== "" && editflag) {
    editelement.innerHTML = value;
    displayalert("value changed", "sucess");
    // edit local storage
    editlocalstorage(editid, value);
    setbacktothedefault();
  } else {
    displayalert("please enter value", "danger");
  }
}
//display alert
function displayalert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  //remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}
//clear items
function clearitems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayalert("empty list", "success");
  setbacktothedefault();
  localStorage.removeItem("list");
}
//edit function
function edititem(event) {
  const element = event.currentTarget.parentElement.parentElement;
  //set edit item
  editelement = event.currentTarget.parentElement.previousElementSibling;
  //set from value
  grocery.value = editelement.innerHTML;
  editflag = true;
  editid = element.dataset.id;
  submitbtn.textContent = "edit";
}
//delete function
function deleteitem(event) {
  const element = event.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayalert("item removed", "success");
  setbacktothedefault();
  //remove from local storage
  removefromlocalstorage(id);
}
// set back to the default
function setbacktothedefault() {
  grocery.value = "";
  editflag = false;
  editid = "";
  submitbtn.textContent = "submit";
}
//armazenamento local
function addtothelocalsotrage(id, value) {
  const grocery = { id: id, value: value };
  let items = getlocalstorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
function removefromlocalstorage(id) {
  let items = getlocalstorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function editlocalstorage(id, value) {
  let items = getlocalstorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getlocalstorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
//localstorage api
//set item
//getitem
//removeitem
//save as strings
//localStorage.setItem("item", JSON.stringify(["item", "item2"]));
//const item = JSON.parse(localStorage.getItem("item"));
//ocalStorage.removeItem('item')
//setup dos itens

function setupitems() {
  let items = getlocalstorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createlistitem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createlistitem(id, value) {
  const element = document.createElement("article");
  //add class
  element.classList.add("grocery-item");
  //add id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
  const deletebtn = element.querySelector(".delete-btn");
  const editbtn = element.querySelector(".edit-btn");
  deletebtn.addEventListener("click", deleteitem);
  editbtn.addEventListener("click", edititem);
  //append child
  list.appendChild(element);
}
