// header
const header = document.querySelector(".l-header");
document.addEventListener("scroll", () =>
  window.scrollY >= 400
    ? header.classList.add("l-header--fixed")
    : header.classList.remove("l-header--fixed")
);

// accordion
const accordionItems = document.querySelectorAll(".c-accordion__item");
accordionItems.forEach((accordionItem) => {
  const accordionButton = accordionItem.querySelector(
    ".c-accordion__item__header"
  );

  accordionButton.addEventListener("click", () => {
    const isActive = accordionItem.classList.contains(
      "c-accordion__item--active"
    );

    // zero todo mundo
    accordionItems.forEach((accordionItem) => {
      accordionItem.classList.remove("c-accordion__item--active");
    });

    if (isActive) {
      accordionItem.classList.remove("c-accordion__item--active");
    } else {
      accordionItem.classList.add("c-accordion__item--active");
    }
  });
});
