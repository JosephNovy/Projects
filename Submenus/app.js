import sublinks from "./data.js";

const togglebtn = document.querySelector(".toggle-btn");
const closebtn = document.querySelector(".close-btn");
const sidebarwrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");

const linkbtn = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

//hide/show sidebar------------------------------------
togglebtn.addEventListener("click", () => {
  sidebarwrapper.classList.add("show");
});
closebtn.addEventListener("click", () => {
  sidebarwrapper.classList.remove("show");
});

//-----------------------------------------------------
//set sidebar------------------------------------------
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article>
<h4>${page}</h4>
<div class="sidebar-sublinks">
${links
  .map((link) => {
    return `<a href="${link.url}">
    <i class="${link.icon}"></i>${link.label}</a>`;
  })
  .join("")}
</div>
</article>`;
  })
  .join("");
//-----------------------------------------------------
//linksbtn---------------------------------------------
linkbtn.forEach((btn) => {
  btn.addEventListener("mouseover", (event) => {
    const text = event.currentTarget.textContent;
    const tempbtn = event.currentTarget.getBoundingClientRect();
    //const tempbtn = event.currentTarget.getBoundingClientRec(); Pegando as coordenadas do currentTarget
    const bottom = tempbtn.bottom - 3;
    const center = (tempbtn.left + tempbtn.right) / 2;

    const temppage = sublinks.find(({ page }) => page === text);
    if (temppage) {
      const { page, links } = temppage;
      submenu.classList.add("show");
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
      //quantidade de colunas no hero----------
      let columns = "col-2";
      if (links.length === 9) {
        columns = "col-3";
      }
      if (links.length > 9) {
        columns = "col-4";
      }
      //---------------------------------------
      submenu.innerHTML = `<section>
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
        })
        .join("")}
      </div>
      </section>`;
    }
  });
});
//-----------------------------------------------------
//hide hero--------------------------------------------
hero.addEventListener("mouseover", (event) => {
  submenu.classList.remove("show");
});
nav.addEventListener("mouseover", (event) => {
  if (!event.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
