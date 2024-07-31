const header = document.querySelector(".l-header")
document.addEventListener("scroll", () =>
  window.scrollY >= 400
    ? header.classList.add("l-header--fixed")
    : header.classList.remove("l-header--fixed")
)
