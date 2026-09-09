document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".site-menu");

  toggle.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", isOpen);
    toggle.textContent = isOpen ? "×" : "☰";
  });
});
