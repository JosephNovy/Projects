const url = "https://randomuser.me/api/";
/*const img = document.querySelector(".user-img");
const title = document.querySelector(".user-title");
const value = document.querySelector(".user-value");
const valueslist = document.querySelector(".values-list");
const btnicon = document.querySelectorAll(".icon");
const btn = document.querySelector(".btn");*/

//GET ELEMENT FUNTION
const getelement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};
//---------------------------
//GETING ELEMENTS
const img = getelement(".user-img");
const title = getelement(".user-title");
const value = getelement(".user-value");
const btn = getelement(".btn");
const btns = [...document.querySelectorAll(".icon")];
//---------------------------
//GET USER FUNCTION
const getuser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  const { phone, email } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    dob: { age },
  } = person;
  const {
    street: { number, name },
  } = person.location;
  return {
    phone: phone,
    email: email,
    image: image,
    password: password,
    age: age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};
//---------------------------
//DISPLAY USER FUNTION
const displayuser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  btns.forEach((btn) => btn.classList.remove("active"));
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      btns.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
};

//SHOW USER FUNTION
const showuser = async () => {
  const person = await getuser();
  displayuser(person);
};

window.addEventListener("DOMContentLoaded", showuser);
btn.addEventListener("click", showuser);
