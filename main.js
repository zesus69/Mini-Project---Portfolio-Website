window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

const sr = ScrollReveal({
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(
  ".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .service__card, .project__content, .footer__content",
  {
    delay: 500,
    interval: 100,
  }
);

sr.reveal(".qualification__footer-text, .contact__content", {
  origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { origin: "right" });