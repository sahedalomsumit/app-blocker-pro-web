"use strict";

document.documentElement.classList.add("js");

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
if (toggle && nav) {
  toggle.hidden = false;
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  };
  toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) setMenu(false);
  });
  const mobileNav = window.matchMedia("(max-width: 800px)");
  const syncNav = () => {
    toggle.hidden = !mobileNav.matches;
    setMenu(false);
  };
  mobileNav.addEventListener("change", syncNav);
  syncNav();
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const gallery = document.querySelector(".screenshot-gallery");
const controls = document.querySelector(".gallery-controls");
if (gallery && controls) {
  const buttons = controls.querySelectorAll("[data-gallery-direction]");
  const updateControls = () => {
    const max = gallery.scrollWidth - gallery.clientWidth;
    controls.hidden = max < 2;
    buttons.forEach((button) => {
      const direction = Number(button.dataset.galleryDirection);
      button.disabled = direction < 0 ? gallery.scrollLeft <= 1 : gallery.scrollLeft >= max - 1;
    });
  };
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const screen = gallery.querySelector(".screen");
      const gap = parseFloat(getComputedStyle(gallery).columnGap) || 0;
      gallery.scrollBy({
        left: ((screen?.getBoundingClientRect().width || gallery.clientWidth) + gap) * Number(button.dataset.galleryDirection),
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
    });
  });
  gallery.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", updateControls, { passive: true });
  updateControls();
}

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".feature, .how-panel, .privacy-layout, .closing").forEach((element) => {
    element.classList.add("reveal-ready");
    observer.observe(element);
  });
}
