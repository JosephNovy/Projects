const togglebtn = document.querySelector(".btn");
const articlescontainer = document.querySelector(".articles");

togglebtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesdata = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    const formatdate = moment(date).format("MMMM Do, YYYY");
    return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatdate}</span>
          <span>${length} min read</span>
        </div>
        <p>
          ${snippet}
        </p>
      </article>`;
  })
  .join("");

articlescontainer.innerHTML = articlesdata;
