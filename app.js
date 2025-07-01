window.onload = function () {
  const post = document.querySelector(".post");
  const postBody = document.querySelector(".post-body");
  const description = document.querySelector(".clip");
  const seeMore = document.querySelector(".see-more");

  seeMore.addEventListener("click", (e) => {
    if (seeMore.textContent === "See more") {
      seeMore.textContent = "See less";
      description.classList.remove("clip");
    } else {
      seeMore.textContent = "See more";
      description.classList.add("clip");
    }
  });

  if (description.scrollHeight > description.offsetHeight) {
    seeMore.style.display = "block";
  } else {
    seeMore.style.display = "none";
  }
};
