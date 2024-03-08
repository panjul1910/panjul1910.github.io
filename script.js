const url = '/news';

const kontenElement = document.querySelector(".konten");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.articles.forEach((article) => {
      const imgElement = document.createElement("img");
      imgElement.src = "https://newsapi.org/images/n-logo-border.png";

      const spanElement = document.createElement("span");
      const maxLength = 90;

      const truncatedTitle =
        article.title.length > maxLength
          ? article.title.substring(0, maxLength) + "..."
          : article.title;

      spanElement.textContent = truncatedTitle;

      const divElement = document.createElement("div");
      divElement.classList.add("berita-item");

      divElement.appendChild(imgElement);
      divElement.appendChild(spanElement);
      kontenElement.appendChild(divElement);
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });
