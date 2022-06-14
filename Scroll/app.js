const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

const navtoggle = document.querySelector(".nav-toggle");
const linkscontainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navtoggle.addEventListener("click", function () {
  //linkscontainer.classList.toggle("show-links");
  const containerheight = linkscontainer.getBoundingClientRect().height;
  const linksheight = links.getBoundingClientRect().height;

  if (containerheight === 0) {
    linkscontainer.style.height = `${linksheight}px`;
  } else {
    linkscontainer.style.height = 0;
  }
});

const navbar = document.querySelector("#nav");
const toplink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  const scrollheight = window.pageYOffset;
  const navheight = navbar.getBoundingClientRect().height;
  if (scrollheight > navheight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollheight > 500) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});

const scrollinks = document.querySelectorAll(".scroll-link");

scrollinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const id = event.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navheight = navbar.getBoundingClientRect().height;
    const containerheight = linkscontainer.getBoundingClientRect().height;
    const fixednav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navheight;
    if (!fixednav) {
      position = position - navheight;
    }
    if (navheight > 82) {
      position = position + containerheight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linkscontainer.style.height = 0;
  });
});
