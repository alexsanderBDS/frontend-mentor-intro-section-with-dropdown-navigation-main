const btnEl = document.querySelector(".button-nav");
const dropEls = document.querySelectorAll(".dropdown");

btnEl.addEventListener("click", () => {
  const imgEl = btnEl.querySelector(".button-img");
  if (!document.body.classList.contains("mobile-open")) {
    imgEl.setAttribute("src", "images/icon-close-menu.svg");
    return document.body.classList.add("mobile-open");
  }

  imgEl.setAttribute("src", "images/icon-menu.svg");
  return document.body.classList.remove("mobile-open");
});

dropEls.forEach((dropEl) => {
  dropEl.addEventListener("click", function () {
    const arrowEl = dropEl.querySelector(".arrow-up");
    if (!dropEl.classList.contains("drop-open")) {
      arrowEl.setAttribute("src", "images/icon-arrow-up.svg");
      return dropEl.classList.add("drop-open");
    }

    arrowEl.setAttribute("src", "images/icon-arrow-down.svg");
    return dropEl.classList.remove("drop-open");
  });
});
