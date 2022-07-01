const container = document.querySelector(".container");
const displayfollowers = (followers) => {
  const newfollowers = followers
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      return `<article class="card">
    <img src ="${avatar_url}" alt="${login}"/>
    <h4>${login}</h4>
    <a href="${html_url}" class="btn">view profile</a>
    </article>`;
    })
    .join("");
  container.innerHTML = newfollowers;
};

export default displayfollowers;
