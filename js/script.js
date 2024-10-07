const header = document.querySelector(".l-header")
document.addEventListener("scroll", () =>
  window.scrollY >= 400
    ? header.classList.add("l-header--fixed")
    : header.classList.remove("l-header--fixed")
)

document
  .querySelectorAll(".acordeon__card__title")
  .forEach((acordeon__card__title) => {
    acordeon__card__title.addEventListener("click", () => {
      const acordeon__card__content = acordeon__card__title.nextElementSibling
      acordeon__card__content.style.display =
        acordeon__card__content.style.display === "block" ? "none" : "block"
    })
  })
